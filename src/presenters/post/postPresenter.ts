interface PostPresenterResponse {
  page?: string;
  limit?: string;
  category?: string;
  query?: string;
}

export class PostPresenter {
  static toHTTP(params: {
    page?: string;
    limit?: string;
    category?: string;
    query?: string;
  }): PostPresenterResponse {
    return {
      page: params.page,
      limit: params.limit,
      category: params.category,
      query: params.query,
    };
  }
}

