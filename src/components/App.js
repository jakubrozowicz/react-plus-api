import React, { Component } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const URL = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    users: [],
  };

  handleClick = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw new Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        const user = data.results;
        this.setState((prevState) => ({
          users: prevState.users.concat(user),
        }));
      })
      .catch((error) => console.log(`Masz błąd: ${error}`));
  };

  render() {
    const users = this.state.users;

    return (
      <div>
        <ButtonFetchUsers click={this.handleClick} />
        {users.length > 0 ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
