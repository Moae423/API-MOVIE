export interface MovieResponse<T> {
  message: string;
  success: boolean;
  data: T;
  error?: string;
}
