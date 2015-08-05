'use strict';

describe('ReactTilesApp', () => {
  let React = require('react/addons');
  let ReactTilesApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactTilesApp = require('components/ReactTilesApp.js');
    component = React.createElement(ReactTilesApp);
  });

  it('should create a new instance of ReactTilesApp', () => {
    expect(component).toBeDefined();
  });
});
