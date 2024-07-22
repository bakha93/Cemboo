import { useQuery } from "@tanstack/react-query";
import { fetchMovie } from "@/services/fetchMovies";
import MoviesCards from "@/components/items/MoviesCards";

const rows = [
  {
    name: "Recomendation",
    var: "horizontal",
  },
  {
    name: "Top 15",
    var: "vertical",
  },
  {
    name: "Poular in Ukraine",
    var: "horizontal",
  },
  {
    name: "Top 15 in Ukraine",
    var: "vertical",
  },
] as const;

const Recomendation = () => {
  const { data } = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovie,
  });

  return (
    <div className=" bg-black flex flex-col gap-2  md:py-8 py-20 ">
      {rows.map((row) => (
        <MoviesCards
          key={row.name}
          data={data}
          variant={row.var}
          title={row.name}
        />
      ))}
    </div>
  );
};

export default Recomendation;
