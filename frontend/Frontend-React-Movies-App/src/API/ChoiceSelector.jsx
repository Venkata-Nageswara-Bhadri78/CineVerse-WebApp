import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function ChoiceSelector({selectChoice, setSelectChoice, isTopRated}) {

    return (
        <Box sx={{ }}>
        <FormControl fullWidth>
            <NativeSelect
            value={selectChoice}
            onChange={(event) => {
                setSelectChoice(event.target.value)
            }}
            >
            <option value="" disabled>Select Type</option>
            {!isTopRated && <option value="person">PERSON</option>}
            <option value={"tv"}>TV SHOW</option>
            <option value={"movie"}>MOVIE</option>
            </NativeSelect>
        </FormControl>
        </Box>
    );
}



// import * as React from 'react';
// import Select, { selectClasses } from '@mui/joy/Select';
// import Option from '@mui/joy/Option';
// import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

// export default function ChoiceSelector({selectChoice, setSelectChoice, isTopRated}) {
//   return (
//     <Select
//         value={selectChoice}
//         onChange={(event) => {
//             setSelectChoice(event.target.value)
//         }}
//       placeholder="Select a Choice"
//       indicator={<KeyboardArrowDown />}
//       sx={{
//         width: 240,
//         [`& .${selectClasses.indicator}`]: {
//           transition: '0.2s',
//           [`&.${selectClasses.expanded}`]: {
//             transform: 'rotate(-180deg)',
//           },
//         },
//       }}
//     >
//         <Option value="" disabled>Select Type</Option>
//         {!isTopRated && <Option value="person">PERSON</Option>}
//         <Option value={"tv"}>TV SHOW</Option>
//         <Option value={"movie"}>MOVIE</Option>
//     </Select>
//   );
// }
