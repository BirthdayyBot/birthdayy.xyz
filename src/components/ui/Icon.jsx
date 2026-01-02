import { FaBeer } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

export const _FaBeer = ({ color, size }) => {
  return <FaBeer color={color} size={size} />;
};

export const NewTab = ({ color, size }) => {
  return <MdOutlineOpenInNew color={color} size={size} />;
};

export const ArrowRight = () => {
  return (
    <img
      src="/media/emojis/svg/arrw-right.svg"
      width={20}
      height={20}
      loading="lazy"
      alt="Arrow Right Icon"
    />
  );
};
