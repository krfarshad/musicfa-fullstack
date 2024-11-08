import { Field, Form, Formik } from "formik";
import { FInput, FSubmit, FUpload } from "@/components/Fields";
import Box from "@mui/material/Box";
import { FSelect } from "@/components/Fields/FSelect";
import { ArtistsField } from "./ArtistsField";
import { addMusic } from "../api/addMusic";

export const UploadMusic = () => {
  const initValues = {};
  const submitFormHandler = async (values: typeof initValues) => {
    await addMusic({ values });
  };
  return (
    <Formik initialValues={initValues} onSubmit={submitFormHandler}>
      <Form>
        <Field component={FInput} label="title" name="title" />
        <Field
          component={FUpload}
          label="Music cover image"
          name="musicCover"
        />
        <ArtistsField />
        <Field component={FUpload} label="music" name="music" />
        <Field className="mt-4" component={FSubmit} label="submit" />
      </Form>
    </Formik>
  );
};
