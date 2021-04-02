import React, { FC } from "react";
import { Box, IconButton, Tooltip } from "@material-ui/core";
import { CallEndOutlined, Add, Shuffle } from '@material-ui/icons';
import { useStyles } from "./controlBar.style";
import { useDispatch } from "react-redux";
import { addNewUser, reset, shuffle } from "../../store/actions";


const ControlBar: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box className={classes.controlBarWrapper}>
      <Tooltip title="Add new user">
        <IconButton className={classes.sideButton} onClick={() => dispatch(addNewUser())}>
          <Add />
        </IconButton>
      </Tooltip>
      <Tooltip title="Reset">
        <IconButton className={classes.iconButton} onClick={() => dispatch(reset())}>
          <CallEndOutlined />
        </IconButton>
      </Tooltip>
      <Tooltip title="Shuffle for fun :D">
        <IconButton className={classes.sideButton} onClick={() => dispatch(shuffle())}>
          <Shuffle />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default ControlBar;
