import React from "react";
import SwitchSelector from "react-switch-selector";

const CategorySwitcher = ({ selected, setSelected }) => {
  const options = [
    {
      label: "Movie",
      value: "movie",
      selectedBackgroundColor: "#e84118", // red
    },
    {
      label: "Person",
      value: "person",
      selectedBackgroundColor: "#00a8ff", // blue
    },
    {
      label: "TV",
      value: "tv",
      selectedBackgroundColor: "#9c88ff", // purple
    },
  ];

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === selected
  );

  const onChange = (newValue) => {
    setSelected(newValue); // updates parent state
  };

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <div style={{ width: 400, margin: "0 auto" }}>
        <SwitchSelector
          onChange={onChange}
          options={options}
          initialSelectedIndex={initialSelectedIndex}
          backgroundColor={"#2f3640"} // dark gray
          fontColor={"#f5f6fa"} // light gray for inactive
          optionBorderRadius={12}
          fontSize={16}
          optionPadding={14}
          selectedFontWeight="bold"
        />
      </div>
    </div>
  );
};

export default CategorySwitcher;
