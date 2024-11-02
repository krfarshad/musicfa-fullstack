import { Field, Form, Formik } from "formik";
import { FInput, FSubmit } from "@/components/Fields";
import Box from "@mui/material/Box";

export const UploadMusic = () => {
  const initValues = {};
  const submitFormHandler = async (values: typeof initValues) => {};
  return (
    <Formik initialValues={initValues} onSubmit={submitFormHandler}>
      <Form>
        <Field component={FInput} label="username" name="username" />
        <Box pt={1}>
          <Field
            component={FInput}
            label="password"
            name="password"
            type="password"
          />
        </Box>
        <Field className="mt-4" component={FSubmit} label="submit" />
      </Form>
    </Formik>
  );
};
