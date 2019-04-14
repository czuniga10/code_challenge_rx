import React, {Component} from 'react';

class UserItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const {firstName, lastName, phone, email} = this.props;

        return(
            
                <div className="proj-holder">
                    <div className="type">
                        {firstName}
                    </div>
                    <div className="reps">
                        {lastName}
                    </div>
                    <div className="weight">
                        {phone}
                    </div>
                    <div className="email" >
                        {email}
                    </div>
                </div> 
        // </Link>
        )
    }
}
export default UserItem;