import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h2>Here is a Big List of Users</h2>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  fetchUsers,
};

export function loadData(store) {
  console.log('Store: ', store);
  return store.dispatch(fetchUsers());
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
