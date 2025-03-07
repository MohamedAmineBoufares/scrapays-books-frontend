import { Button, HStack, Text } from "@chakra-ui/react";

import Header from "./header";
import BooksTable from "./books-table";
import { useState } from "react";
import AddEditBookDrawer from "./add-edit-book-drawer";

function Dashboard() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="lg:!p-20 !p-5">
        <Header />

        <HStack justifyContent="end" marginBottom="2">
          <Button bg="purple.600" onClick={() => toggleOpen()}>
            <Text fontWeight="extrabold" color="white">
              Add a new book
            </Text>
          </Button>
        </HStack>

        <BooksTable />
      </div>

      {open && <AddEditBookDrawer open={open} toggleOpen={toggleOpen} />}
    </>
  );
}

export default Dashboard;
