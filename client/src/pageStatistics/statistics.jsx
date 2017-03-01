import React from 'react';
import { connect } from 'react-redux';

import UserCardContainer from './userCardContainer.jsx';
// import GraphContainer from './graphContainer.jsx';
import { Link, hashHistory } from 'react-router';

const cardStyle = {
  width: '60%',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
}

let Statistics = (props) => {

  if (props.user.username === undefined) {
    hashHistory.push('/signup');
  };

  return (
    <div className="container">
      <div className="row" style={cardStyle}>
          <UserCardContainer />
        {/*
        <div className="col-md-3">
          <UserCardContainer />
        </div>

        <div className="col-md-9">
          <GraphContainer />
        </div>
      */}
      </div>
    </div>
  );
}

// ===============================================
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

Statistics = connect(
  mapStateToProps
)(Statistics);


export default Statistics;