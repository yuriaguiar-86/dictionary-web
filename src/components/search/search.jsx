import './search.css';

import { IoSearchOutline } from 'react-icons/io5';
import { useState } from 'react';

const Search = ({ getWord }) => {
    const [word, setWord] = useState();

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) getWord(word);
    }

    return (
        <div className='container_input'>
            <input 
                type="text" 
                placeholder="Any word..." 
                value={ word }
                onChange={ (e) => setWord(e.target.value) }
                onKeyDown={ handleKeyDown }
            />
            <h3 onClick={ () => getWord(word) }><IoSearchOutline className='icon_search' /></h3>
        </div>
    )
}

export default Search;