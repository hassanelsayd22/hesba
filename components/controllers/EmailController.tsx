import InputController, { InputControllerProps } from "./InputController";

const EmailController = ({ name = "email", ...rest }: InputControllerProps) => {
  return (
    <InputController
      {...rest}
      name={name}
      label="البريد الإلكتروني"
      placeholder="أدخل بريدك الإلكتروني"
      icon="mail"
    />
  );
};

export default EmailController;
