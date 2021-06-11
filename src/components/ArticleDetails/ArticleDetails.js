import './ArticleDetails.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ArticleDetails = ({ foundArticle }) => {

        console.log('mew', foundArticle)
    const image = foundArticle.multimedia[0].url
    const caption = foundArticle.multimedia[0].caption
    return (
        <div className='details-card'>
            <Link to='/' className='back-button'>
                <IoArrowBackCircle className='back-button'/>
            </Link>
            <h2>{foundArticle.title}</h2>
            <p className='by'>{foundArticle.byline}</p>
            <div className='image-box'>
                <img className='details-image' src={image} alt={caption}/>
                <p className='caption'>{caption}</p>
            </div>
        </div>
    )
}

export default ArticleDetails;