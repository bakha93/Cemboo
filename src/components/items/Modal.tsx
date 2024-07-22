import { Button } from "@/components/ui/button";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";

export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="md:max-w-[700px] w-11/12 bg-black border-0 rounded-xl">
        <DialogHeader></DialogHeader>
        <iframe
          src="http://www.youtube.com/embed/laNA2HgwYXU?autoplay=1&showinfo=0&controls=0&autohide=1"
          className="w-full md:h-[25em]"
          width={"100%"}
          height={200}
        ></iframe>
        <DialogFooter className="justify-between w-full flex-col md:flex-row gap-2">
          <Label className="text-white text-xl md:text-3xl">
            Deadpool & Wolverine
          </Label>
          <Button variant="watch" size="lg">
            <IconPlayerPlayFilled color="white" />
            Continue to watch
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
