import { useQuery } from "@tanstack/react-query";
import { fetchOneRandomMovie } from "@/services/fetchOneRandomMovie";
import PlayCard from "@/components/items/PlayCard";

const HeroBanner = () => {
  const { data } = useQuery({
    queryKey: ["hero-banner"],
    queryFn: fetchOneRandomMovie,
  });

  return (
    <div className="w-full h-[60dvh] overflow-hidden relative">
      <img
        src={data?.thumbnail_vertical}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      <PlayCard movie={data} />
    </div>
  );
};

export default HeroBanner;
