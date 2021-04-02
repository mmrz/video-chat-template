import { Box } from "@material-ui/core";
import React, { FC } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader: FC = () => {
  return (
    <Box height="100vh" width="100vw" display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size={100}/>
    </Box>
  )
}

export default Loader;
