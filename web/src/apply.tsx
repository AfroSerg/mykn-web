import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ApplicationPage} from "./components/pages/ApplicationPage";

const appRoot = document.getElementById('app-root');
const app = ReactDOM.render(<ApplicationPage/>, appRoot)