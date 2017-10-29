import * as React from 'react';
// import { connect } from 'react-redux';
import FeatureList from '../../components/FeatureList';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <h1>Hi this is khanh</h1>
        <FeatureList />
      </div>
    );
  }

}

// This is written as stateless React
export default HomePage;
