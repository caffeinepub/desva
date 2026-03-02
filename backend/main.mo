import Map "mo:core/Map";
import List "mo:core/List";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";



actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // ── User profiles ──────────────────────────────────────────────────────────

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get profiles");
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

  // ── Products ───────────────────────────────────────────────────────────────

  type Product = {
    name : Text;
    price : Nat;
  };

  let products = Map.empty<Text, Product>();

  let initialProducts : [(Text, Product)] = [
    ("Earrings", { name = "Earrings"; price = 149 }),
    ("Pipe Cleaner Framework", { name = "Pipe Cleaner Framework"; price = 249 }),
    (
      "Double Side Photo Printed Keychain",
      { name = "Double Side Photo Printed Keychain"; price = 199 },
    ),
    (
      "Premium Customized Scrunchies",
      { name = "Premium Customized Scrunchies"; price = 199 },
    ),
    (
      "Pipe Cleaner Framework Bag",
      { name = "Pipe Cleaner Framework Bag"; price = 349 },
    ),
  ];

  for ((name, product) in initialProducts.values()) {
    products.add(name, product);
  };

  // ── Contact info ───────────────────────────────────────────────────────────

  type ContactInfo = {
    instagramHandle : Text;
    email : Text;
  };

  var contactInfo : ContactInfo = {
    instagramHandle = "_the.desva_";
    email = "thedesvaofficial.com";
  };

  // ── Custom orders ──────────────────────────────────────────────────────────

  type CustomOrder = {
    customerName : Text;
    phoneNumber : Text;
    instagramId : Text;
    productName : Text;
    customizationDetails : Text;
    quantity : Nat;
    deliveryAddress : Text;
    preferredDeliveryDate : Text;
    timestamp : Time.Time;
  };

  module CustomOrder {
    public func compareByTimestamp(a : CustomOrder, b : CustomOrder) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let customOrders = List.empty<CustomOrder>();

  // ── Admin: update product price ────────────────────────────────────────────

  public shared ({ caller }) func updateProductPrice(productName : Text, newPrice : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update product prices");
    };

    switch (products.get(productName)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) {
        let updatedProduct : Product = {
          product with price = newPrice;
        };
        products.add(productName, updatedProduct);
      };
    };
  };

  // ── Admin: update contact info ─────────────────────────────────────────────

  public shared ({ caller }) func updateContactInfo(newInstagramHandle : Text, newEmail : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update contact info");
    };

    let updatedContactInfo : ContactInfo = {
      contactInfo with instagramHandle = newInstagramHandle;
      email = newEmail;
    };
    contactInfo := updatedContactInfo;
  };

  // ── Public: submit a custom order (open to all, including guests) ──────────

  public shared ({ caller }) func submitCustomOrder(
    customerName : Text,
    phoneNumber : Text,
    instagramId : Text,
    productName : Text,
    customizationDetails : Text,
    quantity : Nat,
    deliveryAddress : Text,
    preferredDeliveryDate : Text,
  ) : async Text {
    let newOrder : CustomOrder = {
      customerName;
      phoneNumber;
      instagramId;
      productName;
      customizationDetails;
      quantity;
      deliveryAddress;
      preferredDeliveryDate;
      timestamp = Time.now();
    };

    customOrders.add(newOrder);
    "Order submitted successfully!";
  };

  // ── Admin: view all orders (sensitive customer data) ──────────────────────

  public query ({ caller }) func getAllCustomOrders() : async [CustomOrder] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all orders");
    };
    customOrders.toArray().sort(CustomOrder.compareByTimestamp);
  };

  // ── Public: read product catalogue ────────────────────────────────────────

  public query func getAllProducts() : async [(Text, Product)] {
    products.toArray();
  };

  // ── Public: read contact info ──────────────────────────────────────────────

  public query func getContactInfo() : async ContactInfo {
    contactInfo;
  };
};
