import * as Yup from "yup";
Yup.setLocale({
  mixed: {
    required: "required",
  },
  string: {
    email: "email",
  },
});
export default Yup;
