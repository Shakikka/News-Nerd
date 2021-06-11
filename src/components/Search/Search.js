import './Search.css';
import { useState } from 'react';

const Search = ({ searchArticles, setFilteredArticles }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = e => {
        setSearchTerm(e.target.value)
        searchArticles(e)
    }

    const handleSubmit = e => {
        e.preventDefault()
        clearInput()
    }

    const clearInput = () => {
        setSearchTerm('')
        setFilteredArticles([])
    }

    return (
        <form>
            <input 
                className='search'
                name='search'
                id='search'
                type='text'
                placeholder='Enter Search Term'
                value={searchTerm}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Clear</button>
        </form>
    )
}

export default Search;