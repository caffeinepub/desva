import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { CustomOrder } from '../backend';

interface SubmitOrderParams {
  name: string;
  productType: string;
  eventType: string;
  quantity: bigint;
  customMessage: string;
  dateRequired: string;
}

export function useSubmitCustomOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitOrderParams) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitCustomOrder(
        params.name,
        params.productType,
        params.eventType,
        params.quantity,
        params.customMessage,
        params.dateRequired
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
