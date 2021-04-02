import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  controlBarWrapper: {
    width: '100%',
    height: '7vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, transparent 0%, #0000007d 100%)',
  },
  iconButton: {
    backgroundColor: theme.palette.error.dark,
    padding: theme.spacing(1),
    margin: theme.spacing(0, 3),
    '&:hover': {
      backgroundColor: theme.palette.error.main,
    }
  },
  sideButton: {
    padding: theme.spacing(0.8),
    backgroundColor: colors.grey[900]
  }
}));
