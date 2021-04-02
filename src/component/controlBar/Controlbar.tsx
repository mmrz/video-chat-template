import React, { FC } from "react";
import { Box, IconButton  } from "@material-ui/core";
import CallEndOutlinedIcon from '@material-ui/icons/CallEndOutlined';
import { useStyles } from "./controlBar.style";

interface ControlBarProps {
  onAddNewUser: () => void;
}

const ControlBar: FC<ControlBarProps> = ({ onAddNewUser }) => {
  const classes = useStyles()
  return (
    <Box className={classes.controlBarWrapper}>
      <IconButton className={classes.iconButton} onClick={onAddNewUser}>
        <CallEndOutlinedIcon />
      </IconButton>
    </Box>
  )
}

export default ControlBar;
