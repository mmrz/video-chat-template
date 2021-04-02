import React, { FC, useEffect, useState } from "react";
import { useStyles } from "./header.style";
import { Box, Typography } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const formatTimeNumbers = (time: string) => time.length > 1 ? time : `0${time}`;

const Header: FC = () => {
  const classes = useStyles();
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const min = Math.floor(seconds / 60).toString();
  const sec = (seconds % 60).toString();

  return (
    <Box className={classes.headerWrapper}>
      <Typography>
        Case of Kenedy Murder
      </Typography>
      <Box className={classes.iconWrapper}>
        <AccessTimeIcon />
      </Box>
      <Typography className={classes.time}>
        ({formatTimeNumbers(min)}:{formatTimeNumbers(sec)})
      </Typography>
    </Box>
  )
}

export default Header;
