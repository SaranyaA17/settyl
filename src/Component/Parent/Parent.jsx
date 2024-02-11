import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ParentContext = createContext();

const ParentContextProvider =(props)=>{


    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      fetch(`http://dummy.restapiexample.com/api/v1/employees`)
        .then(response => response.json())
        .then(data => {
          setEmployees(data.data);
        })
        .catch(error => console.error('Error fetching employees', error));
    }, []);


    

    
  return (
    <ParentContext.Provider value={{employees,setEmployees}}>
        {props.children}
    </ParentContext.Provider>
  )
}

export default ParentContextProvider
