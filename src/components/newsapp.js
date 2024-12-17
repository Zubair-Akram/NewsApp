import React, { useEffect, useState } from 'react';
import Card from './card';
import './style.css'; 

const NewsApp = () => {
    const [search , setSearch] = useState("pakistan");
    const [newsData, setNewsData] = useState([]);

    const API_KEY = "a13d2672a0bb47b5a132417174d00b9e";
    const getData = async() =>{
          const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
          const jsonData =  await response.json();
          console.log(jsonData.articles);
          setNewsData(jsonData.articles)
        }
        const handleInput = (event) => {
              console.log(event.target.value)
              setSearch(event.target.value)
        }
        useEffect( ()=>{
            getData()
        },[])
        const userInput = (event) =>{
             setSearch(event.target.value)
        }
  return (
    <div>
        <nav>
           <div>
            <h1>Trendy News</h1>
           </div>
           <ul>
             <h4>All Trendy News</h4>
      </ul>
           <div className='searchBar'>
            <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
            <button onClick={getData}>Search</button>
           </div>
        </nav>
        <div>
            <p>Stay Update for Trendy News</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sport" >Sports</button>
            <button onClick={userInput} value="politics" >Politics</button>
            <button onClick={userInput} value="entertainment" >Entertainment</button>
            <button onClick={userInput} value="health" >Health</button>
            <button onClick={userInput} value="fitness" >Fitness</button>
        </div>
        <div>
            {newsData?  <Card data={newsData}/> : null }
           
        </div>
    </div>
  );
}

export default NewsApp;
