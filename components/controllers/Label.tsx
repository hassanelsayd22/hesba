import { ReactNode } from "react";
type Props = {
  name: string;
  label?: string | ReactNode;
  labelDesc?: string | ReactNode;
};
const Label = ({ name, label, labelDesc }: Props) => {
  if (!label && !labelDesc) return;

  return (
    <div className="flex items-center justify-between mb-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {labelDesc && (
        <div className="text-xs text-primary cursor-pointer">{labelDesc}</div>
      )}
    </div>
  );
};

export default Label;
