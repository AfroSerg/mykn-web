import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HomePage} from "./components/pages/HomePage";

const appRoot = document.getElementById('app-root');
const app = ReactDOM.render(<HomePage/>, appRoot)