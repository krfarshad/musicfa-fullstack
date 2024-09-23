import Carousel from "react-material-ui-carousel";
import { ChildrenProps } from "@/types";

interface Props extends ChildrenProps {}
const CarouselWrapper = (props: Props) => {
  const { children } = props;
  return <Carousel>{}</Carousel>;
};
