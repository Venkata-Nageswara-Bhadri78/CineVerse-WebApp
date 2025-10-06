import React, { useState } from "react";
import SwitchSelector from "react-switch-selector";

const DayWeekSwitcher = ({selected, setSelected}) => {

  const options = [
    {
      label: "Day",
      value: "day",
      selectedBackgroundColor: "#4cd137", // green
    },
    {
      label: "Week",
      value: "week",
      selectedBackgroundColor: "#0097e6", // blue
    },
  ];

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === selected
  );

  const onChange = (newValue) => {
    setSelected(newValue); // updates state
  };

  return (
    <div style={{ textAlign: "center"}}>
      <div style={{ width: 100}}>
        <SwitchSelector
          onChange={onChange}
          options={options}
          initialSelectedIndex={initialSelectedIndex}
          backgroundColor={"#353b48"}
          fontColor={"#f5f6fa"}
        />
      </div>
    </div>
  );
};

export default DayWeekSwitcher;
