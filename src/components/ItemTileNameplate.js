'use strict';

var React = require('react/addons');

// CSS
require('./ItemTileNameplate.css');

var ItemTileNameplate = React.createClass({

  render: function() {
    var beak;
    var beakHighlight;
    var childCount;

    var item = this.props.item;

    if (this.props.showBeak) {
      beak = (<div className="ItemTileNameplate-beak" />);
      beakHighlight = (<div className="ItemTileNameplate-beakHighlight" />);
    }

    if (item.folder && item.folder.childCount !== undefined) {
      childCount = (<div className="ItemTileNameplate-childCount">{ item.folder.childCount }</div>);
    }

    return (
      <div className="ItemTileNameplate">
        { beak }
        { beakHighlight }
        <i className="ItemTileNameplate-icon"></i>
        <div className="ItemTileNameplate-name">{ item.name }</div>
        { childCount }
        <div className="ItemTileNameplate-subText">Subtext</div>
      </div>
    );
  },


  getDefaultProps: function() {
    return {
        title: '',
        showBeak: true,
        backgroundColor: 'red',
        item: {
          name: 'Test',
          folder: {
            childCount: 12
          }
        }
    };
  }

});

module.exports = ItemTileNameplate;
