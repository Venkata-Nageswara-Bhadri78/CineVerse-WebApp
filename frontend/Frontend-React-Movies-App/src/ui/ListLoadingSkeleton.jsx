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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Match MovieCard sizing
const CARD_WIDTH = 170;  
const POSTER_HEIGHT = 240; // Matches h-60 in MovieCard
const CARD_RADIUS = 3; 

export function HeroSkeleton() {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        height: { xs: '40vh', md: '70vh' }, 
        position: 'relative', 
        bgcolor: '#f3f4f6',
        overflow: 'hidden'
      }}
    >
      <Skeleton 
        variant="rectangular" 
        width="100%" 
        height="100%" 
        animation="wave"
        sx={{ bgcolor: 'rgba(0, 0, 0, 0.03)' }}
      />
      
      {/* Content overlay skeleton */}
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          p: { xs: 3, md: 8 }, 
          width: { xs: '100%', md: '60%' },
          zIndex: 2,
          background: 'linear-gradient(to top, rgba(243, 244, 246, 1) 0%, rgba(243, 244, 246, 0) 100%)'
        }}
      >
        <Skeleton 
          variant="text" 
          width="70%" 
          height={80} 
          sx={{ mb: 2, bgcolor: 'rgba(0, 0, 0, 0.05)' }} 
        />
        <Skeleton 
          variant="text" 
          width="90%" 
          height={25} 
          sx={{ bgcolor: 'rgba(0, 0, 0, 0.04)' }} 
        />
        <Skeleton 
          variant="text" 
          width="85%" 
          height={25} 
          sx={{ bgcolor: 'rgba(0, 0, 0, 0.04)', mb: 3 }} 
        />
        <Skeleton 
          variant="rectangular" 
          width={180} 
          height={50} 
          sx={{ borderRadius: 10, bgcolor: 'rgba(0, 0, 0, 0.06)' }} 
        />
      </Box>
      
      {/* Progress indicators skeleton */}
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: 30, 
          right: 30, 
          display: 'flex', 
          gap: 1.5 
        }}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton 
            key={i} 
            variant="circular" 
            width={12} 
            height={12} 
            sx={{ bgcolor: 'rgba(0, 0, 0, 0.15)' }} 
          />
        ))}
      </Box>
    </Box>
  );
}

function Media({ loading = false, pageStyle = false }) {
  const theme = useTheme();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      let visibleCards;
      if (pageStyle) {
        visibleCards = 20;
      } else {
        visibleCards = Math.ceil(width / (CARD_WIDTH + 12)) + 1; 
      }
      setCount(visibleCards);
    };

    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, [pageStyle]);

  const items = loading ? Array.from(new Array(count)) : [];

  return (
    <Grid 
      container 
      wrap={pageStyle ? "wrap" : "nowrap"} 
      sx={{ 
        gap: 2, 
        px: 2, 
        py: 1,
        display: pageStyle ? 'grid' : 'flex',
        gridTemplateColumns: pageStyle ? {
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(4, 1fr)',
          md: 'repeat(5, 1fr)',
          lg: 'repeat(6, 1fr)',
          xl: 'repeat(7, 1fr)'
        } : 'none',
        overflowX: pageStyle ? 'visible' : 'auto',
        '&::-webkit-scrollbar': { display: 'none' }
      }}
    >
      {items.map((_, index) => (
        <Box
          key={index}
          sx={{
            width: pageStyle ? '100%' : CARD_WIDTH,
            flexShrink: 0,
            bgcolor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
            borderRadius: CARD_RADIUS,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Poster image skeleton with subtle gradient */}
          <Skeleton
            variant="rectangular"
            width="100%"
            height={POSTER_HEIGHT}
            sx={{ 
              borderTopLeftRadius: CARD_RADIUS, 
              borderTopRightRadius: CARD_RADIUS,
              bgcolor: 'rgba(0,0,0,0.06)'
            }}
          />

          {/* Bottom content skeleton */}
          <Box
            sx={{
              p: 1.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 72, 
            }}
          >
            <Box sx={{ flex: 1, pr: 1 }}>
              <Skeleton width="85%" height={22} sx={{ mb: 0.5, bgcolor: 'rgba(0,0,0,0.08)' }} />
              <Skeleton width="55%" height={14} sx={{ bgcolor: 'rgba(0,0,0,0.05)' }} />
            </Box>
            <Box sx={{ width: 36, height: 36 }}>
              <Skeleton variant="circular" width={36} height={36} sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />
            </Box>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}


export function DetailsSkeleton() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: '1200px', mx: 'auto' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Poster Skeleton */}
        <Box sx={{ width: { xs: '100%', md: '300px' }, height: '450px', flexShrink: 0, mx: 'auto' }}>
          <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: 4 }} />
        </Box>
        
        {/* Content Skeleton */}
        <Box sx={{ flex: 1, pt: 2 }}>
          <Skeleton variant="text" width="60%" height={60} sx={{ mb: 1 }} />
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Skeleton variant="circular" width={60} height={60} />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="40%" height={25} />
              <Skeleton variant="text" width="30%" height={20} />
            </Box>
          </Box>
          
          <Skeleton variant="text" width="20%" height={30} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="60%" height={20} sx={{ mb: 4 }} />
          
          <Skeleton variant="text" width="30%" height={30} sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} variant="rectangular" width={120} height={40} sx={{ borderRadius: 5 }} />
            ))}
          </Box>
        </Box>
      </Box>
      
      {/* Cast Section Skeleton */}
      <Box sx={{ mt: 8 }}>
        <Skeleton variant="text" width="200px" height={40} sx={{ mb: 3 }} />
        <Box sx={{ display: 'flex', gap: 2, overflow: 'hidden' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Box key={i} sx={{ width: 150, flexShrink: 0 }}>
              <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: 3 }} />
              <Skeleton variant="text" width="80%" sx={{ mt: 1 }} />
              <Skeleton variant="text" width="60%" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function ListLoadingSkeleton({ pageStyle = false }) {
  return (
    <Box sx={{ overflow: 'hidden', py: 2 }}>
      <Media loading pageStyle={pageStyle} />
    </Box>
  );
}


