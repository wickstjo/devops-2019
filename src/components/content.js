import React from 'react';

function Content({ query }) {
    switch (query.status) {

        // EVERYTHING OK
        case 200: { return (
            <div id={ 'content' }>
                <div>
                    { query.data.map((item, index) =>
                        <div className={ 'row' } key={ index }>
                            <Row data={ item } />
                        </div>
                    )}
                </div>
            </div>
        )}

        // QUERY OK, NO RESULTING DATA
        case 204: { return (
            <div id={ 'content' }>
                <div>
                    <div id={ 'error' }>No results found!</div>
                </div>
            </div>
        )}

        // API BLOCKED OR DOWN
        case 404: { return (
            <div id={ 'content' }>
                <div>
                    <div id={ 'error' }>The API is not responding!</div>
                </div>
            </div>
        )}

        // FALLBACK, RETURN EMPTY SELECTOR
        default: { return <div id={ 'content' } /> }
    }
}

function Row({ data }) {

    // GENERATE HEADER & DEPARTURE TIME
    const header = data.trainType + '-' + data.trainNumber;
    const departure = data.timeTableRows['0'].scheduledTime.split('T')[1].slice(0, 5)

    return (
        <div className={ 'split' }>
            <div>{ header }</div>
            <div>{ departure }</div>
        </div>
    )
} 

export default Content;