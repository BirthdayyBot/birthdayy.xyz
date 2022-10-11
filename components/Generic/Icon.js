import { FaBeer } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import Image from "next/image";

export const _FaBeer = ({ color, size }) => {
  return <FaBeer color={color} size={size} />;
};
export const NewTab = ({ color, size }) => {
  return <MdOutlineOpenInNew color={color} size={size} />;
};

export const ArrowRight = () => {
  return (
    <Image
      src={"/media/emojis/svg/arrw-right.svg"}
      width={20}
      height={20}
      alt=""
    />
  );
};
