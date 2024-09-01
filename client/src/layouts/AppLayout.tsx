import { ChildrenProps } from "@/types";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props extends ChildrenProps {}
export const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
