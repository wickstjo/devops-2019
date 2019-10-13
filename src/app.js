import React, { useState } from 'react';
import Form from './components/form';
import Content from './components/content';
import './interface/css/general.scss';
import axios from 'axios';

function App() {

   // LOCAL STATE
   const [ state, dispatch ] = useState({})

   // FORM RESPONSE
   const response = (value) => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
         
         // ON SUCCESS
         dispatch({
            data: result.data,
            status: result.status,
            input: value
         })

      }).catch(error => {

         // ON ERROR
         dispatch({
            status: 404,
            reason: error
         })
      })
   }
   
   return (
      <div id={ 'wrapper' }>
         <div>
            <Form
               placeholder={ 'Search for something..' }
               response={ response }
            />
            <Content query={ state } />
         </div>
      </div>
   )
}

export default App;