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
