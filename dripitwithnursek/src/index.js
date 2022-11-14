import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './App'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)


