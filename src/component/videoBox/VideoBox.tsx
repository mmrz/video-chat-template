import { Box, Chip, IconButton, Tooltip } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { FC } from "react";
import { User } from "../../store/type";
import { useStyles } from "./videoBox.style";

interface VideoBoxProps {
  user: User,
  onDeleteUser: () => void;
}

const VideoBox: FC<VideoBoxProps> = ({ user: { name, image }, onDeleteUser }) => {
  const classes = useStyles();
  return (

    <Box className={classes.videoWrapper}>
      <img
        className={classes.video}
        src={image}
        alt=""
      />
      <Box className={classes.infoBox}>
        <Box display="flex" justifyContent="start">
          <Tooltip title="remove user">
            <IconButton size="small" onClick={onDeleteUser} className={classes.deleteButton}>
              <Close fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box pb={0.5}>
          <Chip
            variant="outlined"
            size="small"
            label={name}
            className={classes.nameChip}
          />
        </Box>
      </Box>
    </Box>

  )
}

export default VideoBox;
