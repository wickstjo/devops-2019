import React, { useState } from 'react';

function Form({ placeholder, response }) {

    // LOCAL STATE
    const [ state, dispatch ] = useState('');

    // UPDATE VALUE
    const update = (event) => {
        dispatch(event.target.value)
    }

    // SUBMIT EVENT
    const submit = (event) => {

        // PREVENT PAGE RELOAD
        event.preventDefault();

        // IF INPUT EXISTS, EXECUTE
        if (state !== '') {
            response(state)
        }
    }

    return (
        <form onSubmit={ submit }>
            <div id={ 'form' }>
                <div>
                    <input
                        type={ 'text' }
                        placeholder={ placeholder }
                        value={ state }
                        onChange={ update }
                    />
                </div>
                <div>
                    <input
                        type={ 'submit' }
                        value={ 'SEARCH' }
                        id={ 'submit' }
                        onClick={ submit }
                        className={ (state === '') ? 'bad' : 'good' }
                    />
                </div>
            </div>
        </form>
    )
}

export default Form;