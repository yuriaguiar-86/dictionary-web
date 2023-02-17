import './sound.css';

import { BsFillPlayFill } from 'react-icons/bs';

const Sound = ({ audio }) => {
    const handlePlaySound = () => {
        const player = document.getElementById('player');
        player.play();
    }

    return (
        <>
            <button
                className={`${ audio ? 'container_button' : 'container_button container_desabled' }`} 
                title={ !audio && 'Does not have audio file!'}
                onClick={ handlePlaySound }
            >
                    <BsFillPlayFill className='icon_play' />
            </button>

            <audio id='player'>
                <source src={ audio } type="audio/mp3" />
            </audio>
        </>
    );
}

export default Sound;