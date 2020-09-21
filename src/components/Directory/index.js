import React, { Component } from "react";
import UserTable from "../UserTable";
import Nav from "../Navbar";
import API from "../../utils/API";

class Directory extends Component {
  _isMounted = false;
  state = {
    search: "",
    users: [],
    order: "",
    filteredUsers: []
  }

  componentDidMount()  {
    this._isMounted = true;
    API.findPeople().then(res => {
      if (this._isMounted) {
        this.setState({
          users: res.data.results,
          filteredUsers: res.data.results
        });
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  sortName = () => {
    const filteredPeople = this.state.filteredUsers;
    if (this.state.order === "ascend") {
        const sorteds = filteredPeople.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
        console.log(sorteds)

        this.setState({
            filteredUsers: sorteds,
            order: "descend"
        })
    } else {

        const sorteds = filteredPeople.sort((a, b) => (a.name.last > b.name.last) ? -1 : 1)
        console.log(sorteds)

        this.setState({
            filteredUsers: sorteds,
            order: "ascend"
        })

    }
}

  
  handleInputChange = event => {
    const people = this.state.users;
    const UserInput = event.target.value;
    const filteredUsers = people.filter(user => user.name.last.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    )
    console.log(filteredUsers);
    this.setState({
      filteredUsers: filteredUsers
    });
  };

  
  
  render() {
    return (
      <div>
        <Nav user={this.state.filteredUsers} handleInputChange={this.handleInputChange} />
      
        <UserTable users={this.state.filteredUsers} sortName={this.sortName}/>
      </div>
    );
  }
}

export default Directory;




