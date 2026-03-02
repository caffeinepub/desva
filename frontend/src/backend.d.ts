import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface CustomOrder {
    customerName: string;
    deliveryAddress: string;
    customizationDetails: string;
    productName: string;
    preferredDeliveryDate: string;
    timestamp: Time;
    quantity: bigint;
    phoneNumber: string;
    instagramId: string;
}
export interface ContactInfo {
    instagramHandle: string;
    email: string;
}
export interface UserProfile {
    name: string;
}
export interface Product {
    name: string;
    price: bigint;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllCustomOrders(): Promise<Array<CustomOrder>>;
    getAllProducts(): Promise<Array<[string, Product]>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactInfo(): Promise<ContactInfo>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitCustomOrder(customerName: string, phoneNumber: string, instagramId: string, productName: string, customizationDetails: string, quantity: bigint, deliveryAddress: string, preferredDeliveryDate: string): Promise<string>;
    updateContactInfo(newInstagramHandle: string, newEmail: string): Promise<void>;
    updateProductPrice(productName: string, newPrice: bigint): Promise<void>;
}
