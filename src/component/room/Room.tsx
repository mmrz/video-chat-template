import React, { FC } from "react";
import { useStyles } from "./room.style";
import Header from "../header/Header";
import ControlBar from "../controlBar/Controlbar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import VideoContainer from "../videoContainer/VideoContainer";


const Room: FC = () => {
  const users = useSelector((state: RootState) => state.users);
  const classes = useStyles();

  return (
    <div className={classes.pageWrapper}>
      <Header />
      <VideoContainer users={users}/>
      <ControlBar />
    </div>
  )
}

export default Room;
