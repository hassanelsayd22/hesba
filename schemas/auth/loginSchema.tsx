import Yup from "../../utils/yup";
import {
  hasLowercase,
  hasNumber,
  hasSpecialSign,
  hasUppercase,
} from "../regex";

export const loginSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string()
    .required()
    .min(8)
    .max(64)
    .matches(hasUppercase, "shouldHaveUppercase")
    .matches(hasLowercase, "shouldHaveLowercase")
    .matches(hasNumber, "shouldHaveNumber")
    .matches(hasSpecialSign, "shouldHaveSpecialSign"),
});
