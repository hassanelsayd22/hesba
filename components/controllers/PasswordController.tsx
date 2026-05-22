import InputController, { InputControllerProps } from "./InputController";

const PasswordController = ({
  name = "password",
  ...rest
}: InputControllerProps) => {
  return (
    <InputController
      {...rest}
      name={name}
      label="كلمة المرور"
      labelDesc={
        <span className="text-sm font-medium text-primary cursor-pointer">
          نسيت كلمة المرور؟
        </span>
      }
      placeholder="أدخل كلمة مرورك"
      icon="lock"
    />
  );
};

export default PasswordController;
