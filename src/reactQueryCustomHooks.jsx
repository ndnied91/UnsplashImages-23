import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';

export const useFetchImages = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `/?client_id=${import.meta.env.VITE_API_KEY}&query=`
      );
      return { data, isLoading, isError, error };
    },
  });
  return { data, isLoading, isError, error };
};
