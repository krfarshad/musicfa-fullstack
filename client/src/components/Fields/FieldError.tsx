import Box from "@mui/material/Box";
import { FormikErrors } from "formik";

type Props = {
  error:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
};
export const FieldError = (props: Props) => {
  const { error } = props;
  return (
    <Box width={1}>
      <span className="w-full text-sm text-red-400">{`${error}`}</span>
    </Box>
  );
};
