import './Search.css';
import { useState } from 'react';

const Search = ({ searchArticles }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = e => {
        setSearchTerm(e.target.value)
        searchArticles(e)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.clearInput()
    }

    clearInput = () => {
        setSearchTerm('')
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
                onChange={this.handleChange}
            />
            <button onClick={handleChange}>Search</button>
        </form>
    )
}

export default Search;