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
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { Book } from "../../types";

type Props = {
  open: boolean;
  toggleOpen: () => void;
  row?: Book;
};

const REQUIREd_FIELD = "This field is required";

function AddEditBookDrawer({ open, toggleOpen, row }: Props) {
  return (
    <DrawerRoot open={open} onOpenChange={() => toggleOpen()} size="sm">
      <DrawerBackdrop />

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{row ? "Edit book" : "Add a new Book"}</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Stack gap={5}>
            <Field
              required
              invalid
              label="Name"
              errorText={REQUIREd_FIELD}
              helperText="0/10"
            >
              <Input placeholder="My awesome book" />
            </Field>

            <Field
              required
              invalid
              label="Description"
              helperText="0/100"
              errorText={REQUIREd_FIELD}
            >
              <Textarea placeholder="This is just the beginning, this book is destined to shatter records!" />
            </Field>
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button>Save</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}

export default AddEditBookDrawer;
