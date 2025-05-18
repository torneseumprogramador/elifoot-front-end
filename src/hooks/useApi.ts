import { useState, useEffect } from 'react';

// Cache global para armazenar as respostas das requisições
const requestCache = new Map<string, any>();

interface UseApiOptions<T> {
  fetchFn: () => Promise<T[]>;
  dependencies?: any[];
  cacheKey?: string;
}

interface UseApiResult<T> {
  data: T[];
  loading: boolean;
  error: Error | null;
}

export function useApi<T>({ 
  fetchFn, 
  dependencies = [],
  cacheKey
}: UseApiOptions<T>): UseApiResult<T> {
  const [data, setData] = useState<T[]>(() => {
    // Tenta recuperar do cache primeiro
    if (cacheKey && requestCache.has(cacheKey)) {
      return requestCache.get(cacheKey);
    }
    return [];
  });
  const [loading, setLoading] = useState(!cacheKey || !requestCache.has(cacheKey));
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Se já temos dados no cache, não precisamos fazer a requisição
    if (cacheKey && requestCache.has(cacheKey)) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetchFn();
        if (isMounted) {
          setData(response);
          setError(null);
          // Armazena no cache se tiver uma chave
          if (cacheKey) {
            requestCache.set(cacheKey, response);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
          console.error("Error fetching data:", err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchFn, cacheKey, ...dependencies]);

  return { data, loading, error };
} 