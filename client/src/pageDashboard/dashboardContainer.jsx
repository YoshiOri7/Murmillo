import { connect } from 'react-redux';
import Dashboard from './dashboard.jsx';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    currentRoom: state.room
  }
}

const DashboardContainer = connect(
  mapStateToProps
)(Dashboard);

export default DashboardContainer;