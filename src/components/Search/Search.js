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
                data-cy='search'
                className='search'
                name='search'
                id='search'
                type='text'
                placeholder='Enter Search Term'
                value={searchTerm}
                onChange={handleChange}
            />
            <button className='button' onClick={handleSubmit} data-cy='show-all'>Show All</button>
        </form>
    )
}

export default Search;