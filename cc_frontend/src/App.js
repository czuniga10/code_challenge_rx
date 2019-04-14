import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  }
});

class App extends Component {
  constructor(props) {
    super(props) 
      this.state={

      }
  }

  componentDidMount(){
    
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-dense"
            label="First Name"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <TextField
            id="standard-dense"
            label="Last Name"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <TextField
            id="standard-dense"
            label="Phone Number"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <TextField
            id="standard-dense"
            label="Email"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
        </form>

      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
