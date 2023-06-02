import React from 'react';
import { Header, Features, Footer, Main, Instructions, Models} from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>

    <Features />
    <Main />
    
    <Instructions />
    <Models />
    <Footer />
  </div>
);

export default App;
