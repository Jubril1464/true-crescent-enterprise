import { useFormik } from "formik";

interface FormHandlerProps {
  initialValues: any;
  validationSchema: any;
  onSubmit: (values: any) => void;
  [key: string]: any;
}

export const useFormHandler = ({
  initialValues,
  validationSchema,
  onSubmit,
  ...rest
}: FormHandlerProps) => {
  return useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    ...rest,
  });
};
