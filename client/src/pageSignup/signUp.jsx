import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/actions.js'
import { hashHistory } from 'react-router';
import Axios from 'axios';


// ===============================================
// CSS Stylying
const noteStyle = {
  fontSize: 12,
  color: '#ff8370'
}
// ===============================================

let signUp = ({dispatch}) => {
  let input;

  return(
    <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        if (input.value === 'guest') {
          var userObj = {
            avatarUrl:"https://avatars.githubusercontent.com/u/20877349?v=3",
            email:"guest@gmail.com",
            games:10,
            githubId:"11111111",
            githubUrl:"https://github.com/YoshiOri7",
            // id:2,
            score:10,
            username:"guest",
            wins:0
          }
          dispatch( setUser(userObj) );
        } else {
          dispatch( setUser({username: input.value}) );
        }

        input.value = '';
        hashHistory.push('/dashboard'); }}>

      {/* ------ GitHubLogin ------ */}
      <h2 className='text-center'>Select Username</h2>
      <div className='input-group col-xs-4 col-xs-offset-4'>
        <input className='form-control' ref={node => {input = node}} />
        <span className='input-group-btn'>
          <button className='btn btn-default' type="sumbit">Sign in</button>
        </span>
      </div>

      <div className='text-center' style={noteStyle}>Note: Please either use 'guest' above or Github login below for demo</div>

      {/* ------ GitHubLogin ------ */}
      <div className="text-center">
        <h3>OR</h3>
        <a className="btn btn-lg btn-social btn-github" href="/auth/github">
          <span className="fa fa-github"></span> Sign in with GitHub
        </a>
      </div>


    </form>
  );
}

signUp = connect()(signUp);

export default signUp;
