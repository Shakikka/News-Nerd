import './ArticleDetails.css';
import { useLocation } from 'react-router-dom'

const ArticleDetails = ({ foundArticle }) => {

        console.log('mew', foundArticle)
  
    return <h2>{foundArticle.title}</h2>
}

export default ArticleDetails;