import { Box, EmptyState, Table } from "@chakra-ui/react";
import { LuBook } from "react-icons/lu";

function NoData() {
  return (
    <Table.Row>
      <Table.Cell colSpan={3}>
        <Box
          height={200}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <EmptyState.Root>
            <EmptyState.Content>
              <EmptyState.Indicator color="purple.600">
                <LuBook />
              </EmptyState.Indicator>
              <EmptyState.Title>No Books Available</EmptyState.Title>
              <EmptyState.Description>
                Try adding a new Book.
              </EmptyState.Description>
            </EmptyState.Content>
          </EmptyState.Root>
        </Box>
      </Table.Cell>
    </Table.Row>
  );
}

export default NoData;
