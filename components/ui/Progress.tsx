import clsx from "clsx";

type ProgressProps = {
  completed: number;
  completedColor?: string;
  remainingColor?: string;
  amount?: number;
  showAmount?: boolean;
  className?: string;
};

const formatAmount = (amount: number) => {
  return new Intl.NumberFormat("en-US").format(amount);
};

export default function Progress({
  completed,
  completedColor = "var(--primary)",
  remainingColor = "#DDD",
  amount,
  showAmount = false,
  className,
}: ProgressProps) {
  const safeCompleted = completed > 0 ? Math.min(completed, 100) : 0;
  console.log(safeCompleted);
  return (
    <div className={clsx("w-full flex flex-col gap-2", className)}>
      {(showAmount || amount !== undefined) && (
        <div className="flex items-center justify-between text-sm font-black text-neutral">
          <span>
            {typeof amount === "number" && `${formatAmount(amount)} ر.س`}
          </span>

          <span>({safeCompleted}%)</span>
        </div>
      )}

      <div
        className="relative h-2.5 w-full overflow-hidden"
        style={{
          background: remainingColor,
        }}
      >
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${safeCompleted}%`,
            background: completedColor,
          }}
        />
      </div>
    </div>
  );
}
