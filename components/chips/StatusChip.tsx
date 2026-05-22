const StatusChip = ({ status }) => {
  const map = {
    completed: "bg-secondary-container text-on-secondary-container",
    processing: "bg-primary-container text-white",
    cancelled: "bg-error-container text-on-error-container",
  };

  const label = {
    completed: "مكتمل",
    processing: "قيد التنفيذ",
    cancelled: "ملغي",
  };

  return (
    <span
      className={`${map[status]} px-3 py-1 text-[10px] font-bold uppercase`}
    >
      {label[status]}
    </span>
  );
};
export default StatusChip;
