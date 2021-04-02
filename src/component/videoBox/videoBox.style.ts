import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  videoWrapper: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    position: 'relative',
  },
  video: {
    height: '100%',
  },
  infoBox: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    top: 0,
    left: 0,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

})