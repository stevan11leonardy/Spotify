import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes, { Object } from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import GridLists from './GridList';


const styles = theme => ({
  gridroot: {
    marginLeft: 20,
    fontFamily: 'sans-serif',
    fontSize: 10,
    color: 'grey',
    position: 'static',
  },
  card: {
    maxWidth: 400,
    cursor: 'pointer',
    position: 'relative',
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


const Cards = (props) => {
  const {
    classes,
    element,
    index,
    clickHandlers,
  } = props;
  return (
    <Card className={classes.card} onClick={() => clickHandlers(index)}>
      <CardHeader
        avatar={(
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {element.avatar}
          </Avatar>
        )}
        title={element.text}
        subheader={element.subheader}
      />
      <CardMedia
        className={classes.media}
        image={element.image}
        title={element.title}
      />
      <CardContent>
        <Typography component="p">
          {element.caption}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Grids = (props) => {
  const { state, clickHandler } = props;
  const data = state;
  return (
    <div>
      <Grid container spacing={24}>
        {data.map((element, key) => (
          <Grid item xs={4} key={key}>
            <Cards
              classes={props.classes}
              element={element}
              index={key}
              clickHandlers={clickHandler}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};


class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      istekan: false,
      pageId: 0,
      card: [],
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.clickBack = this.clickBack.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3004/card')
      .then(resp => resp.json())
      .then(((data) => {
        this.setState({ card: data });
      }));
  }

  clickHandler(index) {
    this.setState({
      pageId: index,
      istekan: true,
    });
  }

  clickBack() {
    this.setState({
      istekan: false,
    });
  }

  render() {
    const { classes } = this.props;
    const {
      istekan,
      image,
      pageId,
      card,
    } = this.state;
    if (istekan === false) {
      return (
        <div className={classes.gridroot}>
          <Grids classes={classes} clickHandler={this.clickHandler} state={card} />
        </div>
      );
    }
    return (
      <div>
        <GridLists Data={image} indexs={pageId} classes={classes} />
        <Button variant="contained" color="primary" className={classes.button} onClick={this.clickBack}>Back</Button>
      </div>
    );
  }
}

Browse.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

Cards.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  element: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.instanceOf(Object).isRequired,
  clickHandlers: PropTypes.instanceOf(Object).isRequired,
};

Grids.propTypes = {
  clickHandler: PropTypes.instanceOf(Object).isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
  state: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles, { withTheme: true })(Browse);
