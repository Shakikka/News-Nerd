import './Header.css';
import { ReactComponent as NewsPaper } from '../../assets/newspaper.svg';

const Header = () => {
    return (
    <header>
        <h1>News Nerd</h1>
        <NewsPaper className='news-icon'/>
    </header>
    )
}

export default Header;