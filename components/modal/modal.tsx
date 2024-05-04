import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FormFinance } from "@/app/(dashboard)/finance/_components/form-finance";

export const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <FormFinance />
      </DialogContent>
    </Dialog>
  );
};
