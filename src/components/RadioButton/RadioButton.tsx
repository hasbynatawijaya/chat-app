import { FC } from "react";

import { RadioItem } from "../../types";

interface Props {
  items: RadioItem[];
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: FC<Props> = ({ items, value, onChange }) => {
  return (
    <div className="flex">
      {items.map((item) => (
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer ${
              item.value === value ? "selected" : ""
            }`}
          >
            <span className="label-text">{item.label}</span>
            <input
              type="checkbox"
              className="checkbox border-slate-900"
              checked={item.value === value}
              value={item.value}
              onChange={onChange}
            />
          </label>
        </div>
      ))}
    </div>
  );
};
export default RadioButton;
