import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query FetchBooks($page: Int!, $take: Int!) {
    books: fetchBooks(page: $page, take: $take) {
      books {
        id
        name
        description
      }
      meta {
        totalItems
        totalPages
        currentPage
        currentTake
      }
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation CreateBook($name: String!, $description: String!) {
    book: createBook(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook($id: String!, $updateBookDto: UpdateBookDto!) {
    book: updateBook(id: $id, updateBookDto: $updateBookDto) {
      name
      description
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: String!) {
    deleteBook(id: $id)
  }
`;
