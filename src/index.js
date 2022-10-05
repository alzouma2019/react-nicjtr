import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createState } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducer';
import App from './App';
import './index.css';

let destination = document.querySelector('#container');
