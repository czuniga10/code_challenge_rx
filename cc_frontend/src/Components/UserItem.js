import React, {Component} from 'react';

class UserItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {id, firstName, lastName, phone, email, handlePopulate} = this.props;

        return(
            
                <div className="user-holder" onClick={ () => handlePopulate(id) }>
                    <div className="info">
                        {firstName}
                    </div>
                    <div className="info">
                        {lastName}
                    </div>
                    <div className="info">
                        {phone}
                    </div>
                    <div className="info" >
                        {email}
                    </div> 
                </div> 
        )
    }
}
export default UserItem;