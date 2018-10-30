import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDummy } from '../../store/actions/index';

class Dummy extends Component {
  componentDidMount() {
    this.props.fetchDummy();
  }

  render () {
    const dummy = this.props.dummy;
    if (!dummy) {
      return null;
    }

    return (
      <div>
        <h1 className="yo">The Dummy Coomponent</h1>
        <p>Awesome users on board!</p>
        <p>{this.props.dummy}</p>
      </div>
    );
  }
}

function mapStateToProps({ dummy }) {
  return { dummy };
}

Dummy.propTypes = {
  dummy: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { fetchDummy })(Dummy);
