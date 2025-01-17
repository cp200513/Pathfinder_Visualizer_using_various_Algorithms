import { ChangeEvent } from "react";

export function Select({
  value,
  onChange,
  options,
  label,
  isDisabled,
}: {
  value: string | number;
  label: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; name: string }[];
  isDisabled?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-1">
      <label className="text-xs text-gray-700 ml-1" htmlFor={label}>
        {label}
      </label>
      <select
        disabled={isDisabled}
        className="bg-gray-100 border border-gray-300 rounded-md disabled:pointer-events-none disabled:bg-gray-200 cursor-pointer hover:bg-gray-200 transition ease-in active:ring-0 active:border-0 p-2 min-w-[200px] sm:min-w-full"
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
