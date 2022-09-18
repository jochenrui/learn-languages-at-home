import React, { ChangeEvent } from "react";

interface IDropdown {
  options: string[];
  onSelect: (e: ChangeEvent) => void;
}

const Dropdown = ({ options, onSelect }: IDropdown) => {
  const renderOptions = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
  return (
    <select className="dropdown" onChange={onSelect}>
      {renderOptions}
    </select>
  );
};

export default Dropdown;
