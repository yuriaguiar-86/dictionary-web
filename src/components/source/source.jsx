import './source.css';

import { RxExternalLink } from 'react-icons/rx';

const Source = ({ link }) => {
    return (
        <p className='source'>
            Source <a href={ link } target='_blank' rel="noreferrer">{ link }<RxExternalLink /></a>
        </p>
    );
}

export default Source;