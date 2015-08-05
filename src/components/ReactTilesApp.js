'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');

var ItemTile = require('./ItemTile');
var DetailsRow = require('./DetailsRow');
// var ResizableArea = require('./ResizableArea');

React.addons.Perf.start();

var columns = [
  { type: 'link', propName: 'name', showIcon: true, linkPropName: 'clickUrl', width: 200 },
  { type: 'text', propName: 'sharing', width: 100 },
  { type: 'text', propName: 'size', width: 100 }
];

var ReactTilesApp = React.createClass({

  render: function() {
//{ this.renderTiles() }

    return (
      <div className="main">
        <input type="range" min="100" max="400" value={ this.state.tileSize.width } onChange={ this.onSliderChange } />
        <span>{ this.state.tileSize.width + 'x' + this.state.tileSize.height }</span>
        <h2>Example tile</h2>
        <ItemTile item={ this.state.items[0] } size={ this.state.tileSize } />
        <h2>Example details row</h2>
        { this.renderRows() }
      </div>
    );
  },

  onSliderChange: function(ev) {
    this.setState({
      tileSize: {
        width: Number(ev.target.value),
        height: Number(ev.target.value)
      }
    });
  },

  renderRows: function() {
    var rows = [];
    var items = this.state.items;

    for (var i = 0; i < items.length; i++) {
      rows.push(
        <DetailsRow item={ items[i] } columns={ columns } />
      );
    }

    return rows;
  },

  renderTiles: function() {
    var tiles = [];
    var items = this.state.items;

    for (var i = 0; i < items.length; i++) {
        tiles.push(
          <div style={ { position: 'relative', display: 'inline-block', width: 200, height: 200 } }>
            <ItemTile item={ items[i] } size={ this.state.tileSize } />
          </div>
        );
    }

    return tiles;
  },

  getInitialState: function() {
    return {
        items: this._createItems(100),
        tileSize: {
            width: 200,
            height: 200
        }
    };
  },

  onSizeChange: function(size) {
    this.setState({
        tileSize: size
    });
  },

    componentWillMount: function() {
    },

    componentDidMount: function() {
        React.addons.Perf.stop();
        React.addons.Perf.printInclusive();
    },

    _createItems: function(count) {
      var items = [];


      for (var i = 0; i < count; i++) {
        var imageWidth = Math.round(100 + (Math.random() * 300));
        var imageHeight = Math.round(100 + (Math.random() * 300));

        items.push({
          key: 'item-' + i,
          name: 'Folder ' + i,
          clickUrl: '#foo',
          size: Math.round(Math.random() * 60) + 'KB',
          sharing: '-',
          thumbnail: {
            url: 'http://placeimg.com/' + imageWidth + '/' + imageHeight
          },
          folder: {
            childCount: i
          }
        });
      }

      return items;
    }

});

module.exports = ReactTilesApp;
