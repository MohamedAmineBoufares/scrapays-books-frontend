export interface Book {
  id: number;
  name: string;
  description: string;
}

interface PaginationMeta {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  currentTake: number;
}

export interface FetchBooksResponse {
  books: {
    books: Book[];
    meta: PaginationMeta;
  };
}
