import React from 'react';

function Content({ query }) {
    switch(query.status) {

        // EVERYTHING OK
        case 200: { return (
            <div id={ 'content' }>
                <div>
                    { query.data.map((item, index) =>
                        <div className={ 'row' } key={ index }>
                            { (index + 1) + '. ' + shorten(item.title) }
                        </div>
                    )}
                </div>
            </div>
        )}

        // EVERYTHING OK
        case 404: { return (
            <div id={ 'content' }>
                <div>
                    <div className={ 'row' }>{ query.reason }</div>
                </div>
            </div>
        )}

        // FALLBACK
        default: { return (
            <div id={ 'content' } />
        )}
    }
}

// SHORTEN STRING
function shorten(string) {

    // MAX CHARACTER LIMIT
   const max_length = 35;

   // CHECK IF THE STRING LONGER THAN 22 CHARACTERS
   if (string.length > max_length) {

      // ALLOW THE FIRST 20 CHARACTERS AND TAG ON THE TRIPLEDOT
      string = string.substring(0, (max_length - 3));
      string += '...';
   }

   return string;
}

export default Content;