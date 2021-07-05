import React from 'react';
import { render } from 'react-dom';
import AppComponent from './components/AppComponent/AppComponent';
import '../../assets/fonts/larsseit-webfont/larsseit-webfont.css';
import './Index.css';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <AppComponent />,
    document.body.appendChild(document.createElement('div'))
  );
});
