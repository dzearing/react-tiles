'use strict';

var React = require('react/addons');
var classSet = React.addons.classSet;

// CSS
require('./Image.css');

var Image = React.createClass({
  _imageSize: null,

  render: function() {
    var classes = classSet({
        'Image': true,
        'isLoaded': this.state.isImageLoaded
    });

    return (
      <div className="Image-clipBox" style={ this.props.size }>
        <img
          ref="image"
          className={ classes }
          style={ this.state.imageStyle }
          src={ this.props.src }
          alt={ this.props.alt }
          aria-label={ this.props.ariaLabel }
          onLoad={ this.onImageLoad } />
      </div>
    );
  },

  getDefaultProps: function() {
    return {
        src: '',
        alt: '',
        ariaLabel: '',
        size: {
          width: 0,
          height: 0
        },
        imageStyle: {}
    };
  },

  getInitialState: function() {
    return {
        isImageLoaded: false
    };
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({
        imageStyle: this._getImageStyle(newProps)
    });
  },

  onImageLoad: function() {
    var imageElement = this.refs.image.getDOMNode();

    this._imageSize = {
      width: imageElement.naturalWidth,
      height: imageElement.naturalHeight
    };

    this.setState({
        isImageLoaded: true,
        imageStyle: this._getImageStyle(this.props)
    });
  },

  _getImageStyle: function(props) {
    var imageSize = this._imageSize;
    var clipSize = props.size;

    var imageStyle = {
      transform: 'translate(-50%, -50%)'
    };

    if (imageSize) {
      var imageAspectRatio = imageSize.width / imageSize.height;
      var clipAspectRatio = clipSize.width / clipSize.height;
      var scale = 1;

      if (imageAspectRatio > clipAspectRatio) {
        // wider, match the heights.
        scale = (clipSize.height + 1) / imageSize.height;
      } else {
        scale = (clipSize.width + 1) / imageSize.width;
      }

      imageStyle.transform += ' scale(' + scale + ')';
    }

    return imageStyle;
  }

});

Image.centerType = {
  scaleToFit: 'scaleToFit',
  scaleToFill: 'scaleToFill'
};


module.exports = Image;
