import { Button } from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "./dialog";

type Props = {
  open: boolean;
  toggleOpen: () => void;
  confirmDelete: () => void;
};

const ConfirmDelete = ({ confirmDelete, open, toggleOpen }: Props) => {
  return (
    <DialogRoot
      lazyMount
      role="alertdialog"
      open={open}
      onOpenChange={() => toggleOpen()}
      placement="center"
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            This action cannot be undone. This will permanently delete the book.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button colorPalette="red" onClick={() => confirmDelete()}>
            Delete
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default ConfirmDelete;
