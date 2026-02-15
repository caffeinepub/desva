import List "mo:core/List";
import Storage "blob-storage/Storage";
import Time "mo:core/Time";

module {
  type OldCustomOrder = {
    name : Text;
    productType : Text;
    eventType : Text;
    quantity : Nat;
    customMessage : Text;
    dateRequired : Text;
    timestamp : Time.Time;
  };

  type OldActor = {
    customOrders : List.List<OldCustomOrder>;
  };

  type NewCustomOrder = {
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

  type NewActor = {
    customOrders : List.List<NewCustomOrder>;
  };

  public func run(old : OldActor) : NewActor {
    let newCustomOrders = old.customOrders.map<OldCustomOrder, NewCustomOrder>(
      func(oldOrder) {
        {
          name = oldOrder.name;
          product = oldOrder.productType;
          category = oldOrder.eventType;
          phoneNumber = "";
          email = "";
          quantity = oldOrder.quantity;
          customizationDetails = oldOrder.customMessage;
          images = [];
          deliveryDate = oldOrder.dateRequired;
          timestamp = oldOrder.timestamp;
        };
      }
    );
    { customOrders = newCustomOrders };
  };
};
