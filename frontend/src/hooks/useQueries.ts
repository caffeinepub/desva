import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

// ── Products ──────────────────────────────────────────────────────────────────

export function useGetAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ['allProducts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateProductPrice() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ productName, newPrice }: { productName: string; newPrice: bigint }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updateProductPrice(productName, newPrice);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allProducts'] });
    },
  });
}

// ── Contact Info ──────────────────────────────────────────────────────────────

export function useGetContactInfo() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      if (!actor) return { instagramId: '_the.desva_', email: 'thedesvaofficial@gmail.com' };
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateContactInfo() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ instagramId, email }: { instagramId: string; email: string }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updateContactInfo(instagramId, email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactInfo'] });
    },
  });
}

// ── Custom Orders ─────────────────────────────────────────────────────────────

export function useSubmitCustomOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      customerName: string;
      phoneNumber: string;
      instagramId: string;
      productName: string;
      customizationDetails: string;
      quantity: bigint;
      deliveryAddress: string;
      preferredDeliveryDate: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitCustomOrder(
        data.customerName,
        data.phoneNumber,
        data.instagramId,
        data.productName,
        data.customizationDetails,
        data.quantity,
        data.deliveryAddress,
        data.preferredDeliveryDate,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customOrders'] });
    },
  });
}

export function useGetAllCustomOrders() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ['customOrders'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCustomOrders();
    },
    enabled: !!actor && !isFetching,
  });
}
