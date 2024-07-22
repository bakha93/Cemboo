import HorisontalMovieCard from "@/components/items/HorizontalMovieCard";
import VerticalMovieCard from "@/components/items/VerticalMovieCard";
import { Movie } from "@/types";
const MoviesCards = ({
  data,
  variant,
  title,
}: {
  data: Movie[] | undefined;
  variant?: "vertical" | "horizontal";
  title: string;
}) => {
  return (
    <div className="text-white flex flex-col gap-2">
      <h1 className="text-xl font-semibold md:pl-[5.3em] pl-3">{title}</h1>
      <div
        className={`w-[100dvw] flex overflow-x-auto hide-scroll overflow-y-hidden pr-4 ${
          variant === "vertical" ? "gap-8" : "gap-2"
        }`}
      >
        {data?.map((movie, index) => {
          if (variant === "horizontal") {
            return (
              <HorisontalMovieCard
                movie={movie}
                key={movie.id}
                isMarginL={index === 0}
              />
            );
          }
          if (variant === "vertical") {
            return (
              <VerticalMovieCard
                index={index + 1}
                movie={movie}
                isMarginL={index === 0}
                key={movie.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default MoviesCards;
