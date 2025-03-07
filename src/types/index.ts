export interface Book {
  id: string;
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
