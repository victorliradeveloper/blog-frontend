export class HttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body?: unknown,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export class HttpClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  async get<T>(
    path: string,
    init?: RequestInit & {
      params?: Record<string, string | string[]>;
      next?: { revalidate?: number | false };
    },
  ): Promise<T> {
    const url = this.buildUrl(path, init?.params);
    const { next, ...fetchInit } = init || {};
    const res = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json', ...(fetchInit?.headers ?? {}) },
      ...(next ? { next } : {}),
      ...fetchInit,
    });
    return this.handle<T>(res);
  }

  async post<T>(path: string, body?: unknown, init?: RequestInit): Promise<T> {
    const res = await fetch(this.url(path), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      ...init,
    });
    return this.handle<T>(res);
  }

  private url(path: string): string {
    return path.startsWith('/') ? `${this.baseUrl}${path}` : `${this.baseUrl}/${path}`;
  }

  private buildUrl(path: string, params?: Record<string, string | string[]>): string {
    const url = this.url(path);
    if (!params) return url;

    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => searchParams.append(key, v));
      } else {
        searchParams.append(key, value);
      }
    });

    const queryString = searchParams.toString();
    return queryString ? `${url}?${queryString}` : url;
  }

  private async handle<T>(res: Response): Promise<T> {
    const contentType = res.headers.get('content-type') ?? '';
    const isJson = contentType.includes('application/json');
    const data = isJson ? await res.json() : await res.text();

    if (!res.ok) {
      const message =
        isJson && typeof data === 'object' && data && 'message' in data
          ? String((data as Record<string, unknown>).message)
          : `HTTP ${res.status}`;
      throw new HttpError(message, res.status, data);
    }

    return data as T;
  }
}
