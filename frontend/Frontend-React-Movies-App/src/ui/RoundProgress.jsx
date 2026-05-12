// import * as React from 'react';
// import PropTypes from 'prop-types';
// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CircularProgressWithLabel(props) {
//     const getColor = (value) => {
//         if(value < 30){
//             return "red";
//         }
//         else if(value < 60){
//             return "blue";
//         }
//         else{
//             return "green";
//         }
//     }
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} sx={{ color: getColor(props.value) }} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center'        }}
//       >
//         <Typography
//           variant="caption"
//           component="div"
//           sx={{ color: getColor(props.value) }}
//         >
//           {`${Math.round(props.value)}%`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }


// CircularProgressWithLabel.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// export default function RoundProgress({value}) {
//   return <CircularProgressWithLabel value={value} />;
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

function CircularProgressWithLabel(props) {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= props.value) {
          clearInterval(timer);
          return props.value;
        }
        return prevProgress + 1;
      });
    }, 15);

    return () => clearInterval(timer);
  }, [props.value]);

  const getColor = (value) => {
    if (value < 40) return '#ff4757'; // vibrant red
    if (value < 70) return '#ffa502'; // vibrant orange
    return '#2ed573'; // vibrant green
  };

  const progressColor = getColor(progress);

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        display: 'inline-flex',
        borderRadius: '50%',
        bgcolor: 'rgba(8, 28, 34, 0)', // Standard TMDB dark blue/black
        p: 0.4,
        // boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
      }}
    >
      {/* Background Track */}
      <CircularProgress
        variant="determinate"
        sx={{
          color: 'rgba(255, 255, 255, 0.1)',
        }}
        size={38}
        thickness={3}
        value={100}
      />
      {/* Animated Progress Arc */}
      <CircularProgress
        variant="determinate"
        value={progress}
        size={38}
        thickness={3}
        sx={{
          color: progressColor,
          position: 'absolute',
          left: 3.2,
          top: 3.2,
          filter: `drop-shadow(0 0 2px ${progressColor})`,
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
            transition: 'stroke-dashoffset 0.3s ease-in-out',
          },
        }}
      />
      {/* Centered Label */}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{
            fontSize: '0.8rem',
            fontWeight: '800',
            color: '#000',
          }}
        >
          {`${Math.round(progress)}`}
        </Typography>
      </Box>
    </Box>
  );
}


CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RoundProgress({ value }) {
  const clampedValue = Math.min(Math.max(value, 0), 100);
  return <CircularProgressWithLabel value={clampedValue} />;
}