interface DropdownProps {
  items: string[];
  onSelect: (item: string) => void;
  label: string;
  name: string;
}

export const Dropdown = ({ items, name, onSelect, label }: DropdownProps) => {
  return (
    <>
      <label htmlFor={`${name}-select`}>{label}</label>
      <select
        onChange={(e) => onSelect(e.target.value)}
        name={name}
        id={`${name}-select`}
      >
        <option value="">Please choose a regex option</option>
        {items.map((item, index) => (
          <option key={item + index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};
