import { Card, HStack, Table } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../ui/pagination";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../../queries";
import { useState } from "react";
import { FetchBooksResponse } from "../../../types";
import NoData from "./no-data";
import Loader from "./loader";

function BooksTable() {
  const [pagination, setPagination] = useState({
    page: 1,
    take: 5,
  });

  const { loading, data } = useQuery<FetchBooksResponse>(GET_BOOKS, {
    variables: pagination,
  });

  const renderTableBody = () => {
    if (loading || !data) {
      return <Loader />;
    }

    if (data?.books.meta.totalItems === 0) {
      return <NoData />;
    }

    return data.books.books.map((book) => (
      <Table.Row key={book.id}>
        <Table.Cell>{book.id}</Table.Cell>
        <Table.Cell>{book.name}</Table.Cell>
        <Table.Cell>{book.description}</Table.Cell>
      </Table.Row>
    ));
  };

  return (
    <>
      <Card.Root size="lg">
        <Table.Root variant="outline" stickyHeader>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>ID</Table.ColumnHeader>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>{renderTableBody()}</Table.Body>
        </Table.Root>
      </Card.Root>

      {!!data?.books.meta.totalItems && (
        <div className="!mt-2 flex justify-end">
          <PaginationRoot
            count={data?.books.meta.totalItems ?? 0}
            pageSize={pagination.take}
            page={pagination.page}
            onPageChange={({ page }) =>
              setPagination((prevState) => ({ ...prevState, page }))
            }
          >
            <HStack wrap="wrap">
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </HStack>
          </PaginationRoot>
        </div>
      )}
    </>
  );
}

export default BooksTable;
