import LogoImage from "@/assets/images/logo-dark.png";
import Image from "next/image";
export const Logo = () => {
  return (
    <Image
      src={LogoImage.src}
      alt="Musicfa"
      priority
      width={200}
      height={200}
      className="max-h-16 w-auto"
    />
  );
};
