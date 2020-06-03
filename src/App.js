import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './recipe';
const App = ()=>{
  const App_KEY = '3f7088ad5f89a8a597c5de1f298d21ad';
  const App_ID = '4cf5a116';
  const [query,setQuery] = useState('Chicken');
  const exampleReq = 
  `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`;

  const [recipes,setRecipes] = useState([]);

  const [search,setSearch] = useState('');
  useEffect( ()=>{
   getRecipes();
  },[query]);
  
  const getRecipes = async ()=>{
    const responce = await fetch(exampleReq);
    const data = await responce.json();
    setRecipes(data.hits);
    console.log(data.hits);
    
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form className="searchForm" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(receipe =>(
        <Recipe
        key={receipe.recipe.label} 
        title={receipe.recipe.label} 
        calrories ={receipe.recipe.calories}
        image = {receipe.recipe.image}
        ingredients = {receipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}
export default App;
