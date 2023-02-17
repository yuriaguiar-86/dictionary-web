import './error.css';

import { BsEmojiFrown } from 'react-icons/bs';

const Error = () => {
    return (
        <div className='container_error'>
            <h2><BsEmojiFrown /></h2>
            <p>Sorry... this word wasn't found! Check and try again.</p>
        </div>
    );
}

export default Error;