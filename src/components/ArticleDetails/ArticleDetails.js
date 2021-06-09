import './ArticleDetails.css';
import { useLocation } from 'react-router-dom'

const ArticleDetails = ({ getArticle }) => {
    const location = useLocation().pathname.split('_').join(' ')
    
    return <h2>{location.split('/')[1]}</h2>
}

export default ArticleDetails;