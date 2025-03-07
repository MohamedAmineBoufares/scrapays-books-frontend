import { Button, Spinner, Table } from "@chakra-ui/react";
import type { Book, FetchBooksResponse } from "../../../types";
import { useState } from "react";
import { LuPen, LuTrash } from "react-icons/lu";
import AddEditBookDrawer from "../add-edit-book-drawer";
import ConfirmDelete from "../../ui/confirm-delete";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOOK, GET_BOOKS } from "../../../queries";
import { toaster } from "../../ui/toaster";

function BookItem({ book }: { book: Book }) {
  const [deleteBook, { loading, error }] = useMutation(DELETE_BOOK);
  const { refetch } = useQuery<FetchBooksResponse>(GET_BOOKS, {
    variables: { page: 1, take: 5 },
    skip: true,
  });

  const handleDeleteBook = async () => {
    await deleteBook({
      variables: { id: book.id },
    });
    await refetch();

    toaster.create({
      title: "Book deleted successfully",
      type: "success",
    });
  };

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const toggleOpenDelete = () => {
    setOpenDelete((prevState) => !prevState);
  };

  const toggleOpenEdit = () => {
    setOpenEdit((prevState) => !prevState);
  };

  console.log("placement", error);

  return (
    <>
      <Table.Row>
        <Table.Cell>{book.id}</Table.Cell>
        <Table.Cell>{book.name}</Table.Cell>
        <Table.Cell>{book.description}</Table.Cell>
        <Table.Cell>
          <Button variant="ghost" size="xs" onClick={() => toggleOpenEdit()}>
            <LuPen />
          </Button>

          <Button
            variant="ghost"
            size="xs"
            color="red.500"
            onClick={() => toggleOpenDelete()}
          >
            {loading ? <Spinner /> : <LuTrash />}
          </Button>
        </Table.Cell>
      </Table.Row>

      {openEdit && (
        <AddEditBookDrawer
          open={openEdit}
          toggleOpen={toggleOpenEdit}
          row={book}
        />
      )}

      {openDelete && (
        <ConfirmDelete
          open={openDelete}
          toggleOpen={toggleOpenDelete}
          confirmDelete={() => handleDeleteBook()}
        />
      )}
    </>
  );
}

export default BookItem;
