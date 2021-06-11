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
    gatherArticles()
  }, [])

  const gatherArticles = () => {
    getNews()
      .then(news => {
        setTopStories(news.results)
        console.log(news)
      })
      .catch(error => console.log(error))
  }

  const findArticle = title => {
    const foundArticle = topStories.find(story => story.title === title)
    setFoundArticle(foundArticle)
  }

  const searchArticles = e => {
    const filteredArticles = topStories.filter(article => article.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredArticles(filteredArticles)
  }

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Search 
            searchArticles={searchArticles}
            setFilteredArticles={setFilteredArticles}
          />
          <ArticleList 
            topStories={topStories} 
            filteredArticles={filteredArticles} 
            findArticle={findArticle}
            />
        </Route>
        <Route exact path='/:title'>
          <ArticleDetails 
            image={foundArticle.multimedia} 
            publishDate={foundArticle.published_date && foundArticle.published_date.split('T')[0]}
            caption={foundArticle.multimedia}
            title={foundArticle.title}
            by={foundArticle.byline}
            abstract={foundArticle.abstract}
            url={foundArticle.url}
            // gatherArticles={gatherArticles}
            // findArticle={findArticle}
            />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
