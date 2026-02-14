import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { CustomOrder, ExternalBlob } from '../backend';

interface SubmitOrderParams {
  name: string;
  product: string;
  category: string;
  phoneNumber: string;
  email: string;
  quantity: bigint;
  customizationDetails: string;
  images: ExternalBlob[];
  deliveryDate: string;
}

export function useSubmitCustomOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitOrderParams) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitCustomOrder(
        params.name,
        params.product,
        params.category,
        params.phoneNumber,
        params.email,
        params.quantity,
        params.customizationDetails,
        params.images,
        params.deliveryDate
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customOrders'] });
    },
  });
}

export function useGetAllCustomOrders() {
  const { actor, isFetching } = useActor();

  return useQuery<CustomOrder[]>({
    queryKey: ['customOrders'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCustomOrders();
    },
    enabled: !!actor && !isFetching,
  });
}
