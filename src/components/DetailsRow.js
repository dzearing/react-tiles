'use strict';

var React = require('react/addons');
var RowCheck = require('./RowCheck');

// CSS
require('./DetailsRow.css');

var DetailsRow = React.createClass({

  render: function() {
    return (
      <div key={ this.props.item.key } className={ 'DetailsRow' + (this.state.isSelected ? ' DetailsRow--isSelected' : '') } onClick={ this.onClick }>
        <RowCheck isChecked={ this.state.isSelected } />
        { this.renderCells() }
      </div>
    );
  },

  renderCells: function() {
    var item = this.props.item;
    var cells = [];
    var columns = this.props.columns;

    for (var i = 0; i < columns.length; i++) {
      var column = columns[i];

      if (column.type === 'link') {
        cells.push(this.renderLinkCell(item, column));
      } else {
        cells.push(this.renderTextCell(item, column));
      }
    }

    return cells;
  },

  renderTextCell: function(item, column) {
    return <div className="DetailsRow-cell" style={ { width: column.width } }>{ item[column.propName] }</div>;
  },

  renderLinkCell: function(item, column) {
    var icon;

    if (column.showIcon) {
      icon = <img className="DetailsRow-icon" src="https://d.sfx-df.ms/odsp-media/1.0.38/media/images/filetypes/16_2x/folder.png" />;
    }

    return (
      <div className="DetailsRow-cell" style={ { width: column.width } }>
        <a href={ item[column.linkPropName] }>
          { icon }
          { item[column.propName] }
        </a>
      </div>
    );
  },

  getDefaultProps: function() {
    return {
      item: {},
      columns: [],
      isSelected: true
    };
  },

  getInitialState: function() {
    return {
      isSelected: this.props.isSelected
    };
  },

  onClick: function() {
    this.setState({
      isSelected: !this.state.isSelected
    });
  }

});

module.exports = DetailsRow;

