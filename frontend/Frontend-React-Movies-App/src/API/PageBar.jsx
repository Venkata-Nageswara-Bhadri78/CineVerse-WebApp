import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PageBar = ({ page, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value); // updates parent state
  };

  return (
    <div className="p-4 flex justify-center">
      <Stack spacing={2}>
        <Pagination
          count={5}             // total pages
          page={page}           // controlled current page
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default PageBar;
