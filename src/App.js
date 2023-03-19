import React,{useState} from 'react'
import axios from 'axios';
import Gallery from './Gallery';
import './index.css';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);
  const changeHandler = e => {
    setSearch(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => 
      setData(response.data.photos.photo)
    )
  }
  return (
    <div className='mainContainer'>
      <center>
        <h1 className='heading'> Image Gallery </h1>
        <form onSubmit={submitHandler}>
          <input className='input-ele' type = "text" value={search} onChange = {changeHandler} />
          <input className = "submit-button" type = "submit" name='search' />
        </form>
        <br/>
        {data.length >= 1 ? <Gallery data = {data} /> : <h4> Data Not Loaded </h4>}
      </center>
    </div>
  )
}

export default App