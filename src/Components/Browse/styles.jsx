import red from '@material-ui/core/colors/red';

const styles = theme => ({
    root: {
        marginLeft : 20,
        fontFamily :'sans-serif',
        fontSize: 10,
        color:'grey',
        position:'static',
    },
    card: {
      maxWidth: 400,
      cursor: 'pointer',
      position: 'relative'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
    button: {
      margin: theme.spacing.unit,
    },
});

export default styles;