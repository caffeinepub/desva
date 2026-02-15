import List "mo:core/List";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Storage "blob-storage/Storage";
import Migration "migration";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";

(with migration = Migration.run)
actor {
  // Storage for blob management
  include MixinStorage();

  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Management
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Custom Order Management
  type CustomOrder = {
    name : Text;
    product : Text;
    category : Text;
    phoneNumber : Text;
    email : Text;
    quantity : Nat;
    customizationDetails : Text;
    images : [Storage.ExternalBlob];
    deliveryDate : Text;
    timestamp : Time.Time;
  };

  module CustomOrder {
    public func compareByTimestamp(a : CustomOrder, b : CustomOrder) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let customOrders = List.empty<CustomOrder>();

  // Public order submission - accessible to all users including guests
  public shared ({ caller }) func submitCustomOrder(
    name : Text,
    product : Text,
    category : Text,
    phoneNumber : Text,
    email : Text,
    quantity : Nat,
    customizationDetails : Text,
    images : [Storage.ExternalBlob],
    deliveryDate : Text,
  ) : async Text {
    let newOrder : CustomOrder = {
      name;
      product;
      category;
      phoneNumber;
      email;
      quantity;
      customizationDetails;
      images;
      deliveryDate;
      timestamp = Time.now();
    };

    customOrders.add(newOrder);
    "Order submitted successfully!";
  };

  // Admin-only access to view all orders
  public query ({ caller }) func getAllCustomOrders() : async [CustomOrder] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all orders");
    };
    customOrders.toArray().sort(CustomOrder.compareByTimestamp);
  };
};
