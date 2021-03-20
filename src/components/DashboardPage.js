import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserRow from './UserRow';

const usersInPage = 10;

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  };
  
  onPageNumClick = (e) => {
    const currentPage = e.target.id;
    this.setState(() => ({ currentPage }));
  };

  componentDidMount() {
    try {
      const currentPage = localStorage.getItem('currentPage');

      if (currentPage) {
        this.setState(() => ({ currentPage }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate() {
    localStorage.setItem('currentPage', this.state.currentPage);
  };


  render() {
    return (
      <div>
        {this.props.users.slice((this.state.currentPage-1)*usersInPage,this.state.currentPage*usersInPage).map(user => <UserRow {...user} key={user.node_id}/>)}
        <ul className="page-numbers">
          {this.props.pageNumbers.map(number => <li key={number} id={number} onClick={this.onPageNumClick} className={number === parseInt(this.state.currentPage) ? 'selected-list' : ''}>{number}</li>)}
        </ul>
      </div>
    )
  };
}; 

const mapStateToProps = (state) => { 
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(state.users.length / usersInPage); i++) {
    pageNumbers.push(i);
  };
  return {
  users: state.users,
  pageNumbers: pageNumbers
}};

export default connect(mapStateToProps)(DashboardPage);
