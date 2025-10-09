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

  // This effect runs when the component mounts and whenever the `value` prop changes.
  React.useEffect(() => {
    // Set up a timer to smoothly increment the progress state
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= props.value) {
          clearInterval(timer); // Stop the timer when the target is reached
          return props.value;
        }
        return prevProgress + 1;
      });
    }, 20); // The interval duration controls the speed of the animation

    // Cleanup function: This is crucial to prevent memory leaks.
    // It runs when the component unmounts or before the effect runs again.
    return () => {
      clearInterval(timer);
    };
  }, [props.value]);


  const getColor = (value) => {
    if (value < 40) return theme.palette.error.main;
    if (value < 70) return theme.palette.warning.main;
    return theme.palette.success.main;
  };

  const progressColor = getColor(progress);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      {/* Background Track */}
      <CircularProgress
        variant="determinate"
        sx={{
          color: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
        }}
        size={60}
        thickness={5}
        value={100}
      />
      {/* Animated Progress Arc */}
      <CircularProgress
        variant="determinate"
        value={progress}
        size={60}
        thickness={5}
        sx={{
          color: progressColor,
          position: 'absolute',
          left: 0,
          // Adds a subtle shadow for depth, matching the arc's color
          filter: `drop-shadow(0 0 3px ${progressColor}A0)`,
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
            transition: 'stroke-dashoffset 0.2s ease-in-out', // Smooths the SVG drawing
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
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          {`${Math.round(progress)}`}
          <sup style={{ fontSize: '0.6rem', marginLeft: '1px' }}>%</sup>
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RoundProgress({ value }) {
  // Clamping the value ensures it's always within the 0-100 range
  const clampedValue = Math.min(Math.max(value, 0), 100);
  return <CircularProgressWithLabel value={clampedValue} />;
}