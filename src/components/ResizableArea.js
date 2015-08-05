'use strict';

var React = require('react/addons');

require('./ResizableArea.css');

var ResizableArea = React.createClass({

  render: function() {
    return (
      <div className="ResizableArea" style={ this.props.size } onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave }>
        { this.props.children }
        <div className="ResizableArea-grabber" onMouseDown={ this.onMouseDown } />
      </div>
    );
  },

  getDefaultProps: function() {
    return {
      size: {
        width: 100,
        height: 100
      },
      onChange: null
    };
  },
  componentWillUpdate: function() {
    this.state.size = this.props.size;
  },

  getInitialState: function() {
    return {
      size: this.props.size,
      showWidgets: false
    };
  },

  onMouseEnter: function() {
    this.setState({
      showWidgets: true
    });
  },

  onMouseLeave: function() {
    this.setState({
      showWidgets: false
    });
  },

  onMouseDown: function(ev) {
    this._startTrackingMovement();

    this._originalMouseLocation = {
      x: ev.pageX,
      y: ev.pageY
    };

    this._originalSize = this.state.size;

    this.setState({
      isResizing: true
    });
  },

  onMouseMove: function(ev) {
    var distanceTraveled = {
      x: ev.pageX - this._originalMouseLocation.x,
      y: ev.pageY - this._originalMouseLocation.y
    };

    var size = {
      width: this._originalSize.width + distanceTraveled.x,
      height: this._originalSize.height + distanceTraveled.y
    };

    this.setState({
      size: size
    });

    if (this.props.onChange) {
      this.props.onChange(size);
    }
  },

  onMouseUp: function() {
    this._stopTrackingMovement();
  },

  _startTrackingMovement: function() {
    this._onMouseMove = this.onMouseMove.bind(this);
    this._onMouseUp = this.onMouseUp.bind(this);

    window.addEventListener('mousemove', this._onMouseMove);
    window.addEventListener('mouseup', this._onMouseUp);
  },

  _stopTrackingMovement: function() {
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseup', this._onMouseUp);
  }
});

module.exports = ResizableArea;
