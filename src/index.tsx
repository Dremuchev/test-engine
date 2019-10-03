import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { applyPolyfills, defineCustomElements } from 'hp-engine/loader';

ReactDOM.render(<App />, document.getElementById('root'));

applyPolyfills().then(() => {
    defineCustomElements(window);
});
