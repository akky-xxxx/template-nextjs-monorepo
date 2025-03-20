// refer: https://orval.dev/guides/set-base-url
// refer: https://github.com/orval-labs/orval/blob/master/samples/next-app-with-fetch/custom-fetch.ts
// NOTE: Supports cases where `content-type` is other than `json`
const getBody = <T>(c: Response | Request): Promise<T> => {
  const contentType = c.headers.get('content-type');

  if (contentType && contentType.includes('application/json')) {
    return c.json();
  }

  if (contentType && contentType.includes('application/pdf')) {
    return c.blob() as Promise<T>;
  }

  return c.text() as Promise<T>;
};

const HOST = process.env["BACKEND_API_HOST"] ?? "http://localhost:3100"

// NOTE: Update just base url
const getUrl = (contextUrl: string): string => {
  const url = new URL(`${HOST}${contextUrl}`);
  const pathname = url.pathname;
  const search = url.search;
  const requestUrl = new URL(`${HOST}${pathname}${search}`);

  return requestUrl.toString();
};

// NOTE: Add headers
const getHeaders = (headers?: HeadersInit): HeadersInit => {
  return {
    ...headers,
    Authorization: 'token',
    'Content-Type': 'multipart/form-data',
  };
};

export const customBackendFetch = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  const requestUrl = getUrl(url);
  const requestHeaders = getHeaders(options.headers);

  const requestInit: RequestInit = {
    ...options,
    headers: requestHeaders,
  };

  const request = new Request(requestUrl, requestInit);
  const response = await fetch(request);
  const data = await getBody<T>(response);

  return { status: response.status, data, headers: response.headers } as T;
};
