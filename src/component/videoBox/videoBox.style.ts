import { makeStyles, Theme } from '@material-ui/core/styles';
type StyleProps = {
  numberOfColsAndRow: number;
}
export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
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
  videoBoxWrapper: {
    padding: theme.spacing(.5),
    height: ({numberOfColsAndRow}) => `${100 / numberOfColsAndRow}%`
  }
}))