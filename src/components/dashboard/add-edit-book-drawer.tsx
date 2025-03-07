import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "../ui/drawer";
import { Button, Input, Stack, Textarea, Spinner } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { Book, FetchBooksResponse } from "../../types";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_BOOK, GET_BOOKS } from "../../queries";
import { useState } from "react";
import { toaster } from "../ui/toaster";

type Props = {
  open: boolean;
  toggleOpen: () => void;
  row?: Book;
};

const REQUIRED_FIELD = "This field is required";

function AddEditBookDrawer({ open, toggleOpen, row }: Props) {
  const [createBook, { loading }] = useMutation(CREATE_BOOK);
  const { refetch } = useQuery<FetchBooksResponse>(GET_BOOKS, {
    variables: { page: 1, take: 5 },
    skip: true,
  });

  const [formData, setFormData] = useState({
    name: row?.name || "",
    description: row?.description || "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    description: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      name: !formData.name.trim(),
      description: !formData.description.trim(),
    };

    setFormErrors(errors);

    return Object.values(errors).includes(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await createBook({
        variables: formData,
      });

      await refetch();

      toaster.create({
        title: `Book ${row ? "edited" : "added"} successfully`,
        type: "success",
      });

      toggleOpen();
    } catch (err) {
      console.error("Error creating book:", err);
    }
  };

  return (
    <DrawerRoot open={open} onOpenChange={() => toggleOpen()} size="sm">
      <DrawerBackdrop />

      <form onSubmit={handleSubmit}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{row ? "Edit book" : "Add a new Book"}</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Stack gap={5}>
              <Field
                required
                invalid={formErrors.name}
                label="Name"
                errorText={REQUIRED_FIELD}
              >
                <Input
                  placeholder="My awesome book"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Field>

              <Field
                required
                invalid={formErrors.description}
                label="Description"
                errorText={REQUIRED_FIELD}
              >
                <Textarea
                  placeholder="This is just the beginning, this book is destined to shatter records!"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Field>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="outline" onClick={() => toggleOpen()}>
                Cancel
              </Button>
            </DrawerActionTrigger>
            <Button
              bg="purple.600"
              width="1/2"
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? <Spinner /> : "Save"}
            </Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </form>
    </DrawerRoot>
  );
}

export default AddEditBookDrawer;
