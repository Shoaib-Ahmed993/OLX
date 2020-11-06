import React from 'react'
import './App.css';
import './props.css';
import Routes from './Route'
// import { BrowserRouter, Route, link } from 'react-router-dom'
// import HomePage from './components/Home'
// import Header from './components/Header'
// import Footer from './components/Footer'

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Route path="/" component={HomePage} />
    //   <Footer />
    // </BrowserRouter>
    <div>
      <Routes />
    </div>
  );
}

export default App;
