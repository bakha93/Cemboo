import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Movie } from "@/types";
import { Modal } from "@/components/items/Modal";

const HorizontalMovieCard = ({
  movie,
  isMarginL = false,
}: {
  movie: Movie | undefined;
  isMarginL?: boolean;
}) => {
  return (
    <Modal>
      <Card
        className={`min-w-[10em] min-h-[15em] glass text-white  ${
          isMarginL ? "md:ml-[7em] ml-3" : ""
        }`}
      >
        <CardHeader>
          <img
            src={movie?.thumbnail_vertical}
            alt=""
            className="object-contain"
          />
        </CardHeader>
        <CardFooter className="py-2 flex-col gap-2">
          <CardTitle>{movie?.title}</CardTitle>
          <CardDescription className="max-h-10 overflow-auto text-slate-200 font-extralight">
            {movie?.synopsis}
          </CardDescription>
        </CardFooter>
      </Card>
    </Modal>
  );
};

export default HorizontalMovieCard;
