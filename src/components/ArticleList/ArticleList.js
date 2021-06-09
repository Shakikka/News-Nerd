import './ArticleList.css';
import { Link } from 'react-router-dom';

const ArticleList = ({ topStories }) => {
    return (
        <div>
            <h2>Top Stories</h2>
            {topStories && topStories.map((story, index) => {
                return (
                    <Link to={`/${story.title.split(' ').join('_')}`} key={index}>
                        <img className='thumbnail' src={story.multimedia[0].url} alt=''/>
                        <p>{story.title}</p>
                        <p>{story.published_date}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default ArticleList