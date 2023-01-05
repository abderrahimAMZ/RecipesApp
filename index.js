// eslint-disable-next-line no-unused-vars
import React from 'react'
import  { createRoot }  from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import App from './src/App.js'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
