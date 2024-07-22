import useOnHover from "@/hooks/useOnHover";
import { motion } from "framer-motion";
import { links } from "./links";
import useGetViewPortWith from "@/hooks/useGetViewPortWith";

const Navbar = () => {
  const { ref, isHovered } = useOnHover<HTMLDivElement>();
  const width = useGetViewPortWith();

  return (
    <motion.div
      ref={ref}
      className="glass flex md:flex-col py-6 rounded-t-xl items-start pl-6 md:rounded-r-xl md:rounded-l-none justify-center gap-4 fixed z-50 left-0 md:top-0 right-0 bottom-0 shadow-xl shadow-gray-700"
      animate={
        width > 768
          ? {
              width: isHovered ? "10em" : "5em",
            }
          : {}
      }
    >
      {links.map((link) => (
        <Link
          key={link.name}
          isHovered={width > 768 ? isHovered : false}
          name={link.name}
        >
          <link.icon
            color={link.color}
            fill={link.name === "Home" ? link?.fill : "transparent"}
          />
        </Link>
      ))}
    </motion.div>
  );
};

export default Navbar;

const Link = ({
  isHovered = false,
  children,
  name = "Name",
}: {
  isHovered?: boolean;
  children: React.ReactNode;
  name?: string;
}) => {
  return (
    <span className="flex gap-2 hover:scale-110 duration-200 ease-in-out text-white">
      {children}
      <motion.p
        animate={{ opacity: isHovered ? 1 : 0, transition: { duration: 0.7 } }}
      >
        {isHovered ? name : ""}
      </motion.p>
    </span>
  );
};
