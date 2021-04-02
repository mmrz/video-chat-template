import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  chatSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85vh',
    flexWrap: 'wrap',
    overflow: 'hidden',
    margin: theme.spacing(0, 1)
  },
}))