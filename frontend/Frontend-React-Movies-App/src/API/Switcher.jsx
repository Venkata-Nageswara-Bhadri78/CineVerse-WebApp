import SwitchSelector from "react-switch-selector";
import React from 'react';

const Switcher = ({time, setTime}) => {
    const options = [
        {
            label: <span style={{ fontWeight: 'bold', color: '#ffffff' }}>Day</span>,
            value: "day",
            selectedBackgroundColor: "#4cd137",
        },
        {
            label: <span style={{ fontWeight: 'bold', color: '#ffffff' }}>Week</span>,
            value: "week",
            selectedBackgroundColor: "#0097e6",
        }
    ];
    
    const onChange = (newValue) => {
        setTime(newValue)
    };
    
    const initialSelectedIndex = options.findIndex(({value}) => value === time);
    
    return (
        <div style={{ width: 150, height: 40}}>
            <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={"#dcdde1"} // Light gray background
                fontColor={"#2f3640"}       // Dark text for unselected
                optionPadding={10}
                selectedFontWeight="bold"
                height={40}
                borderRadius={20}
                fadeSpeed={300} // smooth transition
            />
        </div>
    );
};

export default Switcher;
