import { Button } from "@/components/ui/button";
import { Movie } from "@/types";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

const PlayCard = ({ movie }: { movie: Movie | undefined }) => {
  return (
    <div className="absolute bottom-10 md:right-10 right-4  h-40 w-11/12 md:w-1/3 flex flex-col gap-3 text-white glass p-4 rounded-xl">
      <h1 className="text-lg font-medium">
        {movie?.title} {movie?.duration_minutes} m {movie?.genre[0]}
      </h1>
      <p className="text-sm">{movie?.synopsis}</p>
      <Button variant="watch" size="lg">
        <IconPlayerPlayFilled color="white" />
        Watch now
      </Button>
    </div>
  );
};

export default PlayCard;
