import './ArticleDetails.css';
import { IoArrowBackCircle } from "react-icons/io5";

const ArticleDetails = ({ foundArticle }) => {

        console.log('mew', foundArticle)
    const image = foundArticle.multimedia[0].url
    const caption = foundArticle.multimedia[0].caption
    return (
        <div className='details-card'>
            <IoArrowBackCircle className='back-button'/>
            <div className='image-box'>
                <img className='details-image' src={image} alt={caption}/>
                <p>{caption}</p>
            </div>
            <h2>{foundArticle.title}</h2>
        </div>
    )
}

export default ArticleDetails;