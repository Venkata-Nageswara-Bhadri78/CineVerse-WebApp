// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';

// function MediaSkeleton() {
//   return (
//     <Grid container wrap="nowrap" spacing={2}>
//       {Array.from(new Array(8)).map((_, index) => (
//         <Box key={index} sx={{ width: 210 }}>
//           <Skeleton variant="rectangular" width={210} height={118} />
//           <Box sx={{ pt: 0.5 }}>
//             <Skeleton />
//             <Skeleton width="60%" />
//           </Box>
//         </Box>
//       ))}
//     </Grid>
//   );
// }

// export default function ListLoadingSkeleton() {
//   return (
//     <Box sx={{ overflow: 'hidden' }}>
//       <MediaSkeleton />
//     </Box>
//   );
// }

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

// Match MovieCard sizing
const CARD_WIDTH = 170;  // ≈ w-36 in Tailwind (~9rem)
const POSTER_HEIGHT = 200; // ≈ h-52 in Tailwind (~13rem)
const CARD_RADIUS = 3; // rounded-lg

function Media({ loading = false }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      const visibleCards = Math.ceil(width / (CARD_WIDTH + 12)); // include gap
      setCount(visibleCards);
    };

    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const items = loading ? Array.from(new Array(count)) : [];

  return (
    <Grid container wrap="nowrap" sx={{ gap: 1.5, px: 1 }}>
      {items.map((_, index) => (
        <Box
          key={index}
          sx={{
            width: CARD_WIDTH,
            flexShrink: 0,
            bgcolor: 'white',
            boxShadow: 2,
            borderRadius: CARD_RADIUS,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Poster image skeleton */}
          <Skeleton
            variant="rectangular"
            width={CARD_WIDTH}
            height={POSTER_HEIGHT}
            sx={{ borderTopLeftRadius: CARD_RADIUS, borderTopRightRadius: CARD_RADIUS }}
          />

          {/* Bottom content skeleton */}
          <Box
            sx={{
              p: 1.2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 72, // matches text + progress area
            }}
          >
            <Box sx={{ flex: 1, pr: 1 }}>
              <Skeleton width="80%" height={16} />
              <Skeleton width="60%" height={10} />
            </Box>
            <Box sx={{ width: 28, height: 28 }}>
              <Skeleton variant="circular" width={28} height={28} />
            </Box>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default function ListLoadingSkeleton() {
  return (
    <Box sx={{ overflow: 'hidden', py: 1 }}>
      <Media loading />
    </Box>
  );
}
