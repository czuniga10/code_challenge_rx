import React, { Component } from 'react';
import './User.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getUser, getUsers, createUser, updateUser } from '../services/user.service';
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
        users: [],
        id: '',
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        save_button_visible: true
      }
    this.refresh = this.refresh.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handlePopulate = this.handlePopulate.bind(this);
  }

  componentDidMount(){
    this.refresh();
  }

  //
  refresh() {
    getUsers()
      .then(res => {
        console.log(res.data);
        let userData = res.data;
        this.setState({users: userData})
      })
  }

  //adds text in text field to state
  handleInputChange(e){
    const key = e.target.name;
    let newState = this.state[key];
    newState = e.target.value;
    console.log(newState);
    this.setState({ [key]: newState });
  }

  //sends new user data to DB
  handleSubmit() {
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const phone = this.state.phone;
    const email = this.state.email;
    const body = {first_name, last_name, phone, email}
    createUser(body)
      .then( res => {
          if (res.status !== 200) {
              alert(res)
          } else {
              console.log(res.data)
              this.refresh()
          }
      })
        .catch(err => {throw err})
    this.setState({
      id: '',
      first_name: '',
      last_name: '',
      phone: '',
      email: ''
    })
  }

  //sends updated data to DB
  handleUpdateSubmit() {
    const {first_name, last_name, phone, email, id} = this.state;
    const body = { id, first_name, last_name, phone, email}
    updateUser(body)
      .then( res => {
          if (res.status !== 200) {
              alert(res)
          } else {
              console.log(res.data)
              this.refresh()
          }
      })
        .catch(err => {throw err})
    this.setState({
      save_button_visible: true,
      id: '',
      first_name: '',
      last_name: '',
      phone: '',
      email: ''
    })
  }

  //populates text fields with data for update
  handlePopulate(id) {
    getUser(id)
      .then(res => {
        console.log(res.data[0]);
        this.setState({
          save_button_visible: false,
          id: id,
          first_name: res.data[0].first_name,
          last_name: res.data[0].last_name,
          phone: res.data[0].phone,
          email: res.data[0].email
        })
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
        handlePopulate = {this.handlePopulate}
        handleUpdateSubmit = {this.handleUpdateSubmit}
        />)
    })
    return (
      <div className="App">
      <div className="App-header"></div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-dense"
            label="First Name"
            value= {this.state.first_name}
            name= "first_name"
            onChange={ e => {this.handleInputChange(e)} }
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <TextField
            id="standard-dense"
            label="Last Name"
            value= {this.state.last_name}
            name= "last_name"
            onChange={ e => {this.handleInputChange(e)} }
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <TextField
            id="standard-dense"
            label="Phone Number"
            value= {this.state.phone}
            name= "phone"
            onChange={ e => {this.handleInputChange(e)} }
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <TextField
            id="standard-dense"
            label="Email"
            value= {this.state.email}
            name= "email"
            onChange={ e => {this.handleInputChange(e)} }
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
          <button type='button' className={this.state.save_button_visible ? "add-button-true" : "add-button-false"} onClick={ e => {this.handleSubmit(e)} }>save</button>
          <button type='button' className={!this.state.save_button_visible ? "update-button-true" : "update-button-false"} onClick={ e => {this.handleUpdateSubmit(e)} }>update</button>
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
