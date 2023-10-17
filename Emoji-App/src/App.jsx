//import { useState } from 'react'
import { EmojiArray } from './components/emoji'
import { emojiWithNames } from './components/emojidata'
import './App.css'

function App() {
 /* const  = [EmojiArray, setFilter] = useState(null)*/
  const emojiArray = emojiWithNames
  console.log(emojiArray)
  const value = EmojiArray
  console.log(value)

  return (
    <>
    <input type="text" placeholder='Search' />
    <button className='search-btn'>Search</button>
    <button className='copy-btn'>Copy</button>
    </>
  )
}

export default App
