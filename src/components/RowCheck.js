'use strict';

var React = require('react/addons');

require('./RowCheck.css');
/*
    <svg height="20" width="20">
      <circle className="RowCheck-circle" cx="10" cy="10" r="9" strokeWidth="1" />
      <polyline className="RowCheck-check" points="6,10 9,13 14,7" strokeWidth="1" fill="none" />
    </svg>
*/

var RowCheck = React.createClass({
  render: function() {

    return (
      <div className={ 'RowCheck' + (this.props.isChecked ? ' RowCheck--isChecked' : ' RowCheck--isUnchecked') }>
        <img className="RowCheck-image" src="images/check.png" />
      </div>
    );
  },

  getDefaultProps: function() {
    return {
      isChecked: false
    };
  }

});

module.exports = RowCheck;

