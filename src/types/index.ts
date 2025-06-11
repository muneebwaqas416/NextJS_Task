export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface CreatePostInput {
  title: string;
  body: string;
  userId: number;
}

export interface UpdatePostInput extends Partial<CreatePostInput> {
  id: number;
}

export interface ApiError {
  message: string;
  status: number;
}

export interface ApiResponse<T> {
  data: T;
  error?: ApiError;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
} 