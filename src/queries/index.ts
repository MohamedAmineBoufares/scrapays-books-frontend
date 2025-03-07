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
