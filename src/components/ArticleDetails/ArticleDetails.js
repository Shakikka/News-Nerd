import './ArticleDetails.css';
import { AiOutlineRollback } from "react-icons/ai";

const ArticleDetails = ({ foundArticle }) => {

        console.log('mew', foundArticle)
    const image = foundArticle.multimedia[0].url
    const caption = foundArticle.multimedia[0].caption
    return (
        <div className='details-card'>
            <AiOutlineRollback/>
            <h2>{foundArticle.title}</h2>
            <div className='image-box'>
                <img className='details-image' src={image} alt={caption}/>
                <p>{caption}</p>
            </div>
        </div>
    )
}

export default ArticleDetails;