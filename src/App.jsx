import './App.css';

import { useState } from 'react';

import Container from './components/container/container';
import Header from './components/header/header';
import Meaning from './components/meaning/meaning';
import Search from './components/search/search';
import Sound from './components/sound/sound';
import api from './services/apiDictionary';
import Source from './components/source/source';
import Loading from './components/loading/loading';
import Error from './components/error/error';

const App = () => {
    const [meaning, setMeaning] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleMeaningWord = (word) => {
        setMeaning(null);
        setError(false);
        setLoading(true);

        setTimeout(() => { 
            api.get(`/${word}`)
                .then((res) => {
                    setLoading(false);
                    setMeaning(res.data[0]);
                })
                .catch((err) => {
                    if(err.response.status) {
                        setLoading(false);
                        setError(true);
                    }
                });
        }, 1500);
    }

    return (
        <div className='container_main'>
            <Header />
            <Search getWord={ handleMeaningWord } />

            { loading && <Loading /> }
            { error && <Error /> }
            {
                meaning &&
                <Container>
                    <section className='container_word_sound'>
                        <div>
                            <h1>{ meaning.word }</h1>
                            <p className='phonetic'>{ meaning.phonetic }</p>
                        </div>

                        <Sound audio={ meaning.phonetics[0].audio } />
                    </section>

                    <Meaning meanings={ meaning.meanings } />
                    <Source link={ meaning.sourceUrls[0] } />
                </Container>
            }
        </div>
    );
}

export default App;