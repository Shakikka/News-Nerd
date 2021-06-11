import './ArticleDetails.css';

const ArticleDetails = ({ foundArticle }) => {

        console.log('mew', foundArticle)
    const image = foundArticle.multimedia[0].url
    const caption = foundArticle.multimedia[0].caption
    return (
        <div className='details-card'>
            <h2>{foundArticle.title}</h2>
            <img className='details-image' src={image} alt={caption}/>
            <p>{caption}</p>
        </div>
    )
}

export default ArticleDetails;