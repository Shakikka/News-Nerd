import './App.css';
import { useState, useEffect } from 'react';
import { getNews } from '../../apiCalls';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import { Switch, Route } from 'react-router-dom';

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

  const getArticle = title => {
    topStories.find(story => story.title === title)
  }

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/'>
          <ArticleList topStories={topStories}/>
        </Route>
        <Route exact path='/:title'>
          <ArticleDetails articleDetails={getArticle}/>
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
