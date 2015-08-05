'use strict';

var React = require('react/addons');
var NamePlate = require('./ItemTileNameplate');
var Image = require('./Image');

// CSS
require('./ItemTile.css');

var ItemTile = React.createClass({
  render: function() {
    var item = this.props.item;
    var size = this.props.size;
    var image;

    if (item.thumbnail) {
      image = <Image src={ item.thumbnail.url } size={ size } />;
    }

    return (
      <div className="ItemTile" style={ size }>
        { image }
        <NamePlate item={ this.props.item } />
      </div>
    );
  },

  getDefaultProps: function() {
    return {
        item: null,
        size: {
            width: null,
            height: null
        }
    };
  }

});

module.exports = ItemTile;
