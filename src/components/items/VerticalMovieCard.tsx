import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Movie } from "@/types";
import { Modal } from "@/components/items/Modal";

const VerticalMovieCard = ({
  movie,
  isMarginL = false,
  index,
}: {
  movie: Movie | undefined;
  isMarginL?: boolean;
  index: number;
}) => {
  return (
    <Modal>
      <Card
        className={`min-w-[10em] min-h-[15em] relative glass text-white  ${
          isMarginL ? "md:ml-[7em] ml-6" : ""
        }`}
      >
        <CardHeader>
          <img
            src={movie?.thumbnail_horizontal}
            alt=""
            className="object-contain"
          />
        </CardHeader>
        <CardTitle className="absolute bottom-0 left-[-1rem] text-8xl text-gradient-to-r from-slate-50 to-slate-500 ">
          {index}
        </CardTitle>
      </Card>
    </Modal>
  );
};

export default VerticalMovieCard;
