export interface KongObject {
  id?: string;
  [key: string]: unknown;
}

export interface KongListResponse<T> {
  data: T[];
  offset?: string;
  next?: string;
  [key: string]: unknown;
}

export interface KongObjectResponse {
  id?: string;
  message?: string;
  [key: string]: unknown;
}
