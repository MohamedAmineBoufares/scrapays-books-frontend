import { Card, HStack, Table } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../ui/pagination";
import { BOOKS } from "../../db/books";

function BooksTable() {
  return (
    <>
      <Card.Root size="lg">
        <Table.Root variant="outline" stickyHeader colorPalette="orange">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>ID</Table.ColumnHeader>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {BOOKS.map((book) => (
              <Table.Row key={book.id}>
                <Table.Cell>{book.id}</Table.Cell>
                <Table.Cell>{book.name}</Table.Cell>
                <Table.Cell>{book.description}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card.Root>

      <div className="!mt-2 flex justify-end">
        <PaginationRoot count={BOOKS.length * 5} pageSize={5} page={1}>
          <HStack wrap="wrap">
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </div>
    </>
  );
}

export default BooksTable;
