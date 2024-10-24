"use client";
import { ClassNameOptionalProps } from "@/types";
import clsx from "clsx";
import { FieldProps } from "formik";
import { useState } from "react";
import { FieldError } from "./FieldError";
import { isPasswordStrong } from "@/utils/checkStrength";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, IconButton } from "@mui/material";

type Props = {
  label?: string;
  helperText?: string;
  required?: boolean;
  checkStrength?: string;
  copyable?: boolean;
  isPassword?: boolean;
};
export const FInput: React.FC<FieldProps & ClassNameOptionalProps & Props> = (
  props,
) => {
  const {
    className,
    field,
    form,
    label,
    required,
    checkStrength,
    copyable,
    isPassword = false,
    ...rest
  } = props;

  const [show, setShow] = useState<boolean>(false);

  const ChangeShowStatus = () => {
    setShow(!show);
  };

  const classes = clsx(
    "w-full rounded-[36px] disabled:cursor-not-allowed text-light placeholder:text-gray-300 border border-neutral-800 bg-black px-5 py-2.5  text-sm text-gray-300 outline-none backdrop-blur-3xl transition-all placeholder:text-sm focus:border-light focus:transition-all",
    className ? className : "",
  );
  let restOptimize: any = { ...rest };
  if (isPassword) {
    restOptimize = { ...rest, type: show ? "text" : "password" };
  }

  return (
    <div className="mx-auto mb-4 w-full">
      <div className="w-full">
        {label && (
          <label
            htmlFor={field.name}
            className="text-light focus:border-light mb-2 block  text-left text-sm capitalize"
          >
            {label}
            {required && <span className="text-secondary ml-1 text-xl">*</span>}
          </label>
        )}
        <div className="relative">
          <input className={classes} {...restOptimize} {...field} />
          {rest.helperText && (
            <div>
              <p className="text-light mt-1 text-left text-xs font-normal">
                {rest.helperText}
              </p>
            </div>
          )}

          {isPassword && (
            <Button
              role="button"
              className="absolute right-0 top-0 cursor-pointer bg-none"
              onClick={ChangeShowStatus}
            >
              <IconButton size="small">
                {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </Button>
          )}
        </div>
        {form.getFieldMeta(field.name).touched &&
        form.getFieldMeta(field.name).error ? (
          <FieldError error={form.getFieldMeta(field.name).error} />
        ) : null}
        {checkStrength && field.value && (
          <div className="error-messages mt-4 pr-2">
            <div className="mb-2 h-1 w-full rounded-[36px] border border-neutral-800 bg-gradient-to-r from-pink-500 to-emerald-300 backdrop-blur-3xl transition-all"></div>
            {isPasswordStrong(field.value) ? (
              <span className="text-success my-1  block text-sm">
                Wow... great, that's hard enough
              </span>
            ) : (
              <span className="text-secondary my-1  block text-sm">
                It's too weak, put a harder phrase
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
