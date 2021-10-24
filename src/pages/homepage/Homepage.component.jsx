
import React from 'react';
import Header from '../../components/header/Header.component'
import Directory from '../../components/directory/Directory.component'
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Header />
    <Directory />
  </div>
);

export default HomePage;