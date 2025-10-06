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
