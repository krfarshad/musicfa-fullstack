import { Field, Form, Formik, FormikHelpers } from "formik";
import { FInput, FSubmit, FUpload } from "@/components/Fields";
import { useCreate } from "@/hooks/apiHooks";
import { addArtist } from "../api/addArtist";
import { toast } from "react-toastify";

export type PostArtistProp = {
  name: string;
  username: string;
  bio: string;
  artistAvatar: any;
};
export const AddArtist = () => {
  const initValues: PostArtistProp = {
    name: "",
    username: "",
    bio: "",
    artistAvatar: null,
  };

  const { create } = useCreate({
    createFn: addArtist,
  });

  const submitFormHandler = async (
    values: typeof initValues,
    resetForm: FormikHelpers<PostArtistProp>,
  ) => {
    const res = await create({ values });
    if (res.data?.status == 201) {
      toast.success(res.data?.message);
      resetForm;
      return;
    }
    toast.error(res.data?.message ?? "Sth is wrong with your request!");
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={async (values, resetForm) => {
        await submitFormHandler(values, resetForm);
      }}
    >
      <Form>
        <Field component={FInput} label="Name" name="name" />
        <Field component={FInput} label="Username" name="username" />
        <Field component={FInput} label="Bio" name="bio" />
        <Field component={FUpload} label="Avatar" name="artistAvatar" />
        <Field className="mt-4" component={FSubmit} label="submit" />
      </Form>
    </Formik>
  );
};
