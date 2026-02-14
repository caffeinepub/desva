import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CustomOrder {
    customMessage: string;
    name: string;
    productType: string;
    dateRequired: string;
    timestamp: Time;
    quantity: bigint;
    eventType: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllCustomOrders(): Promise<Array<CustomOrder>>;
    submitCustomOrder(name: string, productType: string, eventType: string, quantity: bigint, customMessage: string, dateRequired: string): Promise<string>;
}
