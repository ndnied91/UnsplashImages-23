import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { keys } from '../keys';

export const useFetchImages = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `/?client_id=${keys.accessKey}&query=office`
      );
      return { data, isLoading, isError, error };
    },
  });
  return { data, isLoading, isError, error };
};
