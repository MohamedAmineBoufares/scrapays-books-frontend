import { Avatar, Button, HStack, Stack, Table } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../ui/pagination";
import { BOOKS } from "../../db/books";

function Dashboard() {
  return (
    <div className="!p-20">
      <HStack marginBottom={20}>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Dan Abramov" />
          <Avatar.Image src="https://bit.ly/dan-abramov" />
        </Avatar.Root>

        <Stack gap={1}>
          <h1 className="!text-3xl !font-bold">Welcome back Dan 👋</h1>
          <small className="text-gray-600 !font-bold">Admin</small>
        </Stack>
      </HStack>
      <HStack justifyContent="end" marginBottom="2">
        <Button bg="purple.600" className="!font-extrabold">
          Add a new book
        </Button>
      </HStack>
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
    </div>
  );
}

export default Dashboard;
