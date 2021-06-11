import './ArticleList.css';
import { Link } from 'react-router-dom';

const ArticleList = ({ topStories, findArticle, filteredArticles }) => {
    
    if (filteredArticles.length) {
        topStories = filteredArticles
    }
    
    return (
        <div className='top-stories-container'>
            <h2 className='top-stories'>Top Stories</h2>
            {topStories && topStories.map((story, index) => {
                if (!story.title.includes('%')) {
                return (
                    <Link to={`/${story.title.split(' ').join('_')}`} key={index} className='thumbnail-card' onClick={() => findArticle(story.title)}>
                        <h3 data-cy='list-title' className='list-title'>{story.title}</h3>
                        <img className='thumbnail' src={story.multimedia[0].url} alt=''/>
                        <p className='published'> Published: {story.published_date.split('T')[0]}</p>
                    </Link>
                )}
                return <h2>Something went wrong</h2>
            })}
        </div>
    )
}

export default ArticleList