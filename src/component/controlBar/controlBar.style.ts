import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  controlBarWrapper: {
    width: '100%',
    height: '7vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, transparent 0%, black 100%)',
  },
  iconButton: {
    backgroundColor: theme.palette.error.dark,
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.error.main,
    }
  }
}));
