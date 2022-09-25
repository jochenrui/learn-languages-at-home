import React, { ChangeEvent } from "react";

interface IDropdown {
  options: string[];
  onSelect: (e: ChangeEvent) => void;
}

const Dropdown = ({ options, onSelect }: IDropdown) => {
  const renderOptions = ["Select language", ...options].map((option) => (
    <option className="language-dropdown__language" key={option} value={option}>
      {option}
    </option>
  ));
  return (
    <select className="language-dropdown" onChange={onSelect}>
      {renderOptions}
    </select>
  );
};

export default Dropdown;
