import LogoImage from "@/assets/images/logo-dark.png";
import Image from "next/image";
import Link from "next/link";
export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={LogoImage.src}
        alt="Musicfa"
        priority
        width={200}
        height={200}
        className="max-h-16 w-auto"
      />
    </Link>
  );
};
