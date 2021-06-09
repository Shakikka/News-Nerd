import './App.css';
import { useState, useEffect } from 'react';
import { getNews } from '../../apiCalls';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';

const App = () => {

  const [topStories, setTopStories] = useState([])
  
  useEffect(() => {
    getNews()
      .then(news => {
        setTopStories(news.results)
        console.log(news.results)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Header/>
      <ArticleList topStories={topStories}/>
    </div>
  );
}

export default App;
