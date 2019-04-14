import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { getUsersInfo } from './actions/actionCreators';
import { getUsers } from './services/user.service';
import UserItem from './UserItem';


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
        users: []
      }
  }

  componentDidMount(){
    getUsers()
      .then(res => {
        console.log(res.data);
        let userData = res.data;
        this.setState({users: userData})
      })
  }

  render() {
    const { classes } = this.props;
    const users = this.state.users;
    const displayUserItems = users.map(user => {
      const index = users.indexOf(user);
      return (<UserItem 
        key={index}
        index={index}
        id={user.id}
        firstName={user.first_name}
        lastName={user.last_name}
        phone={user.phone}
        email={user.email}
        />)
    })
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
        {displayUserItems}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
