import { makeStyles, Theme } from '@material-ui/core/styles';

type StyleProps = {
  numberOfColsAndRow: number;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  chatSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',
    margin: theme.spacing(0, 1)
  },
  check: {
    height: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  videoBoxWrapper: {
    padding: theme.spacing(.5),
    height: ({numberOfColsAndRow}) => `calc(85vh / ${numberOfColsAndRow})`,
    minWidth: '100px'
  }
}))