import React, { useEffect } from "react";

interface IInput {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}

const Input = ({ placeholder, onChange, value }: IInput) => {
  useEffect(() => {
    const handleChange = (e) => {
      let timer;
      const el = e.target;

      if (el && el.matches("[data-color]")) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          document.documentElement.style.setProperty(
            `--color-${el.dataset.color}`,
            el.value
          );
        }, 100);
      }
    };
    document.addEventListener("input", handleChange);

    () => {
      document.removeEventListener("input", handleChange);
    };
  }, []);

  return (
    <label className="input">
      <input
        className="input__field"
        type="text"
        placeholder=" "
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <span className="input__label" role="note">
        {value.length > 0 ? "" : placeholder}
      </span>
    </label>
  );
};

export default Input;
