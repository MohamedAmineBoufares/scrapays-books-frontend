import { Box, Spinner, Table } from "@chakra-ui/react";

function Loader() {
  return (
    <Table.Row>
      <Table.Cell colSpan={3} textAlign="center">
        <Box
          height={300}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="lg" />
        </Box>
      </Table.Cell>
    </Table.Row>
  );
}

export default Loader;
