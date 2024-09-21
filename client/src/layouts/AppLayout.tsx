import { ChildrenProps } from "@/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

interface Props extends ChildrenProps {}
export const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto pl-2">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};
