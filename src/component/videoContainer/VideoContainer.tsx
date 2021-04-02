import React, { FC } from "react";
import { Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/actions";
import { User } from "../../store/type";
import VideoBox from "../videoBox/VideoBox";
import { useStyles } from "./videoContainer.style";

interface VideoContainerProps {
  users: User[];
}

const VideoContainer: FC<VideoContainerProps> = ({ users }) => {
  const dispatch = useDispatch();
  const numberOfColsAndRow = Math.ceil(Math.sqrt(users.length));
  const classes = useStyles({numberOfColsAndRow});
  return (
    <Box className={classes.chatSection}>
        {
          users.map((user, index) => (
              <VideoBox 
                user={user} 
                onDeleteUser={() => dispatch(removeUser(user))} 
                key={user.id}
                listLength={users.length}
              />
          ))
        }
      </Box>
  )
}

export default VideoContainer;