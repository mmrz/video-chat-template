import React, { FC } from "react";
import { useStyles } from "./room.style";
import Header from "../header/Header";
import ControlBar from "../controlBar/Controlbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addNewUser } from "../../store/actions";
import VideoContainer from "../videoContainer/VideoContainer";


const Room: FC = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const numberOfColsAndRow = Math.ceil(Math.sqrt(users.length));
  const classes = useStyles({numberOfColsAndRow});
  return (
    <div className={classes.pageWrapper}>
      <Header />
      <VideoContainer users={users}/>      
      <ControlBar onAddNewUser={() => dispatch(addNewUser())}/>
    </div>
  )
}

export default Room;
