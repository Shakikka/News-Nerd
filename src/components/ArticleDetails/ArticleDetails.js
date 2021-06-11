import './ArticleDetails.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ArticleDetails = ({ image, caption, title, by, abstract, url, publishDate, gatherArticles, findArticle }) => {

    // const location = useLocation().pathname.split('_').join(' ').split('/')[1]
    // console.log(location)

    // useEffect(() => {
    //     gatherArticles()
    // }, [])
    // if (!abstract) {

    // }

    return (
        <div className='details-card'>
            <Link to='/' className='back-button'>
                <IoArrowBackCircle className='back-button'/>
            </Link>
            <h2 className='title'>{title}</h2>
            <p className='by'>{by}</p>
            <p className='publish-date'>Published: {publishDate}</p>
            <div className='image-box'>
                <img className='details-image' src={image[0].url} alt={caption[0].caption}/>
                <p className='caption'>{caption[0].caption}</p>
            </div>
            <h3 className='abstract'>{abstract}</h3>
            <a className='full-link' href={url}>Find the Full Article Here!</a>
        </div>
    )
}

export default ArticleDetails;