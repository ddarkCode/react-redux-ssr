import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

export class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }
  render() {
    return (
      <div>
        <h1>Protected Admins List Page</h1>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    admins: state.admins,
  };
};

const mapDispatchToProps = {
  fetchAdmins,
};

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
