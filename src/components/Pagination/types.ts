export type IpropsPagination = {
  pageLength: number;
  page: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  previousPage: number;
  nextPage: number;
  queryParam: string;
};
