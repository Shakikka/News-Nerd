import './App.css';
import { useState, useEffect } from 'react';
import { getNews } from '../../apiCalls';
import Header from '../Header/Header';

const App = () => {

  const [homePage, setHomePage] = useState([])
  
  // useEffect(() => {
  //   getNews()
  //     .then(news => setHomePage(news.results))
  // })

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
