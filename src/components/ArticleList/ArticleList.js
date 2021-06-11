import './ArticleList.css';
import { Link } from 'react-router-dom';

const ArticleList = ({ topStories }) => {
    return (
        <div>
            <h2>Top Stories</h2>
            {topStories && topStories.map((story, index) => {
                if (!story.title.includes('%')) {
                return (
                    <Link to={`/${story.title.split(' ').join('_')}`} key={index} className='thumbnail-card'>
                        <h3>{story.title}</h3>
                        <img className='thumbnail' src={story.multimedia[0].url} alt=''/>
                        <p className='published'> Published: {story.published_date.split('T')[0]}</p>
                    </Link>
                )}
            })}
        </div>
    )
}

export default ArticleList