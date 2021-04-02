import React, { FC } from "react";
import { Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changeOrders, removeUser } from "../../store/actions";
import { User } from "../../store/type";
import VideoBox from "../videoBox/VideoBox";
import { useStyles } from "./videoContainer.style";
import { ReactSortable } from "react-sortablejs";
interface VideoContainerProps {
  users: User[];
}

const VideoContainer: FC<VideoContainerProps> = ({ users }) => {
  const dispatch = useDispatch();
  const numberOfColsAndRow = Math.ceil(Math.sqrt(users.length));
  const classes = useStyles({numberOfColsAndRow});
  return (
    <Box className={classes.chatSection}>
      <ReactSortable className={classes.chatSection} list={users} setList={(list) => dispatch(changeOrders(list))}>
        {
          users.map((user, index) => (
            <Box className={classes.videoBoxWrapper} key={user.id}>
              <VideoBox 
                user={user} 
                onDeleteUser={() => dispatch(removeUser(user))} 
              />
            </Box>
          ))
        }
        </ReactSortable>
      </Box>
  )
}

export default VideoContainer;