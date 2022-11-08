import React from 'react'
import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa'

const Content = () => {
/*   const [name, setName] = useState('shehab');
    const handleNameChange =() =>{
        const name = ['bob', 'shehab', 'boushra'];
        const int = Math.floor(Math.random()*3);
        setName(name[int]);
        return name[int];
      }
      
      const handleClick = () =>{
        const name = handleNameChange();
        console.log(name);
        } */
const [items, setItems] = useState([
  {
    id: 1,
    checked: true,
    item: 'One half pound bag of Cocoa Covered Almondes Unsalted'
  },
  {
    id: 2,
    checked: false,
    item: 'One half pound bag of Cocoa Covered Almondes Unsalted'
  },
  {
    id: 3,
    checked: false,
    item: 'One half pound bag of Cocoa Covered Almondes Unsalted'
  },
])

  return (
    <main>
      <ul>
      {items.map((item) =>
        <li className ="item" key={item.id}>
          <input 
          type="checkbox" 
          checked="{item.checked}"
          />
          <label>{item.item}</label>
          <FaTrashAlt 
            role="button" 
            tabIndex="0"
            />
        </li>

      )}
    </ul>
    </main>
  )
  
}

export default Content