import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    width: '100%',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to top, transparent 0%, #0000007d 100%)',
  },
  iconWrapper: {
    margin: theme.spacing(0, 1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    color: theme.palette.success.main,
  }
}));
