import './App.css';
import { useState, useEffect } from 'react';
import { getNews } from '../../apiCalls';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import Search from '../Search/Search';
import { Switch, Route } from 'react-router-dom';

const App = () => {

  const [topStories, setTopStories] = useState([])
  const [foundArticle, setFoundArticle] = useState({})
  const [filteredArticles, setFilteredArticles] = useState([])
  
  useEffect(() => {
    getNews()
      .then(news => {
        setTopStories(news.results)
        console.log(news.results)
      })
      .catch(error => console.log(error))
  }, [])

  const findArticle = title => {
    const foundArticle = topStories.find(story => story.title === title)
    setFoundArticle(foundArticle)
  }

  const searchArticles = () => {
    const filteredArticles = topStories.filter(article => article.title.includes(e.target.value))
    setFilteredArticles(filteredArticles)
  }

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Search/>
          <ArticleList 
            topStories={topStories} 
            filteredArticles={filteredArticles} 
            findArticle={findArticle}/>
        </Route>
        <Route exact path='/:title'>
          <ArticleDetails 
            image={foundArticle.multimedia} 
            caption={foundArticle.multimedia}
            title={foundArticle.title}
            by={foundArticle.byline}
            abstract={foundArticle.abstract}
            url={foundArticle.url}
            />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
