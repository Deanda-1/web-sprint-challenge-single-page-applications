import * as Yup from "yup";
export const formSchema = Yup.object().shape({
    name: Yup
      .string()
       .min(2, "name must be at least 2 characters"),
  });