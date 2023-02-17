import './header.css';

import { BsJournalBookmark } from 'react-icons/bs';

const Header = () => {
    return (
        <header className='container_header'>
            <h2><BsJournalBookmark /></h2>
            <p>By Yuri Aguiar</p>
        </header>
    );
}

export default Header;