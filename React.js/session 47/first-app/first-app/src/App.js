import React from 'react';
import Burger from './components/Burger';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Search from './components/Search';
import Logos from './components/Logos';
import Footer from './components/Footer';
import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <Burger />
      <div className={styles.wrapperAllPage}>
        <Banner />
        <Cards />
        <Search />
        <Logos />
        <Footer />
      </div>
    </div>
  );
};

export default App;