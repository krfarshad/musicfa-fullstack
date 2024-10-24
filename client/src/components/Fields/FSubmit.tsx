"use client";
import clsx from "clsx";
import { FieldProps } from "formik";

interface SubmitFieldProps extends FieldProps {
  className?: string;
  activeDirty?: boolean;
  label?: string;
}

export const FSubmit: React.FC<SubmitFieldProps> = (props) => {
  const { form, activeDirty, className, label, ...rest } = props;
  const classes = clsx(
    "disabled:opacity-80 group flex items-center cursor-pointer justify-center gap-2.5 w-full rounded-full border border-primary p-2.5 text-xl transition-all hover:transition-all text-primary transition-all hover:bg-red-600 hover:text-slate-100 hover:transition-all",
    className ? className : "",
  );

  const isDisabled = activeDirty
    ? !form.dirty || form.isSubmitting
    : form.isSubmitting;

  const isLoading = form.isSubmitting;
  return (
    <button type="submit" disabled={isDisabled} className={classes}>
      <>
        {label ?? "Submit"}
        {isLoading && <span>Loading ...</span>}
      </>
    </button>
  );
};
