import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
    const getColor = (value) => {
        if(value < 30){
            return "red";
        }
        else if(value < 60){
            return "blue";
        }
        else{
            return "green";
        }
    }
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} sx={{ color: getColor(props.value) }} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: getColor(props.value) }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}


CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RoundProgress({value}) {
  return <CircularProgressWithLabel value={value} />;
}
