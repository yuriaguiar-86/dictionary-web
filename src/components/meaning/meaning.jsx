import './meaning.css';

const Meaning = ({ meanings }) => {
    return (
        <section className='container_meanings'>
            { 
                meanings &&
                meanings.map((meaning) => {
                    return (
                        <>
                            <fieldset><legend>{ meaning.partOfSpeech }</legend></fieldset>
                            <p>Meaning</p>

                            <ul>
                                {
                                    meaning.definitions &&
                                    meaning.definitions.map((explication) => (
                                        <>
                                            <li>{ explication?.definition }</li>
                                            { explication.example && (
                                                <p className='exemple'>"{ explication?.example }"</p>
                                            ) }
                                        </>
                                    ))
                                }
                            </ul>
                        </>
                    );
                })
            }
        </section>
    );
}

export default Meaning;