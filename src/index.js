import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';
import DrawerApp from './components/drawer.js'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<DrawerApp />);