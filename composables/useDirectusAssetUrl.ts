type DirectusAssetParams = Record<string, string | number | boolean | null | undefined>;

export function useDirectusAssetUrl() {
  const config = useRuntimeConfig();
  const baseUrl = config.public.directusUrl?.replace(/\/+$/, "") || "";

  const getAssetUrl = (fileId?: string | number | null, params: DirectusAssetParams = {}) => {
    if (!fileId || !baseUrl) {
      return null;
    }

    const search = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) {
        continue;
      }

      search.set(key, String(value));
    }

    const query = search.toString();
    const url = `${baseUrl}/assets/${fileId}`;

    return query ? `${url}?${query}` : url;
  };

  return { getAssetUrl };
}
