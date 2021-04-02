import { makeStyles, Theme } from '@material-ui/core/styles';

type StyleProps = {
  numberOfColsAndRow: number;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  chatSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85vh',
    flexWrap: 'wrap',
    overflow: 'hidden',
    margin: theme.spacing(0, 1)
  },
  videoBoxWrapper: {
    padding: theme.spacing(.5),
    height: ({numberOfColsAndRow}) => `${100 / numberOfColsAndRow}%`
  }
}))