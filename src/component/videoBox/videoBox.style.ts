import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
  deleteButton: {
    backgroundColor: '#0000004d',
    margin: theme.spacing(.5),
    '&:hover': {
      backgroundColor: '#00000091',
    }
  },
  nameChip: {
    backgroundColor: '#0000004d',
    border: 'none'
  }

}))