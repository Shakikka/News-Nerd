import './ArticleList.css';

const ArticleList = ({ topStories }) => {
    return (
        <>
            <h2>Top Stories</h2>
            {topStories && topStories.map((story, index) => {
                return (
                    <div key={index}>
                        <img className='thumbnail' src={story.multimedia[0].url} alt=''/>
                        <p>{story.title}</p>
                        <p>{story.byline}</p>
                        <p>{story.published_date}</p>
                        <p>{story.abstract}</p>

                    </div>
                )
            })}
        </>
    )
}

export default ArticleList