import List "mo:core/List";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
  type CustomOrder = {
    name : Text;
    productType : Text;
    eventType : Text;
    quantity : Nat;
    customMessage : Text;
    dateRequired : Text;
    timestamp : Time.Time;
  };

  module CustomOrder {
    public func compareByTimestamp(a : CustomOrder, b : CustomOrder) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let customOrders = List.empty<CustomOrder>();

  public shared ({ caller }) func submitCustomOrder(name : Text, productType : Text, eventType : Text, quantity : Nat, customMessage : Text, dateRequired : Text) : async Text {
    let newOrder : CustomOrder = {
      name;
      productType;
      eventType;
      quantity;
      customMessage;
      dateRequired;
      timestamp = Time.now();
    };

    customOrders.add(newOrder);
    "Order submitted successfully!";
  };

  public query ({ caller }) func getAllCustomOrders() : async [CustomOrder] {
    customOrders.toArray().sort(CustomOrder.compareByTimestamp);
  };
};
