import './ArticleDetails.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ArticleDetails = ({ image, caption, title, by, abstract, url, publishDate }) => {

    return (
        <div className='details-card'>
            <Link to='/' className='back-button' data-cy='back-button'>
                <IoArrowBackCircle className='back-button'/>
            </Link>
            <h2 className='title'>{title}</h2>
            <p className='by' data-cy='by'>{by}</p>
            <p className='publish-date'>Published: {publishDate}</p>
            <div className='image-box'>
                <img className='details-image' src={image[0].url} alt={caption[0].caption}/>
                <p className='caption'>{caption[0].caption}</p>
            </div>
            <h3 className='abstract' data-cy='abstract'>{abstract}</h3>
            <a className='full-link' href={url}>Find the Full Article Here!</a>
        </div>
    )
}

export default ArticleDetails;