import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({labelText, placeHolderText, buttonText, onSubmit}) => {

    const [query, setQuery] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if(!query) {
            return;
        };

        return onSubmit(query);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="input-search">{labelText}</label>
            <input 
                type="text"
                name="search"
                id="input-search"
                placeholder={placeHolderText}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
                {buttonText}
            </button>
        </form>
    )
}

Search.propTypes = {
    labelText: PropTypes.string.isRequired,
    placeHolderText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default Search
