import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios";

const data = [
  {login: "Anthony Santillan", avatar_url:" https://avatars.githubusercontent.com/u/58825544?v=4", company: "GitHub"},
  {login: "Bryan Perez", avatar_url: "https://avatars.githubusercontent.com/u/59462642?v=4", company: "GitHub"},
  {login: "Fernando Morocho", avatar_url: "https://avatars.githubusercontent.com/u/47802477?v=4", company: "GitHub"},
  {login: "Kevin Guachagmira", avatar_url: "https://avatars.githubusercontent.com/u/33032880?v=4", company: "GitHub"},
  {login: "Mauricio Matango", avatar_url: "https://avatars.githubusercontent.com/u/61792044?v=4|", company: "GitHub"},
  {login: "Erick-Damian-Casis", avatar_url: "https://avatars.githubusercontent.com/u/67754832?v=4", company: "GitHub"},
];

function SearchResult({results}){
  // crear las tarjetas
  return(
    <div>
      {results.map((value)=>{
        return(
          <div className="tarjetas">
              <img src={value.avatar_url} />
            <div key={value.id}>
              <p>{value.login}</p>
              <p>{value.company}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function SearchBox({onSearch}){
  
  const [searchText, setSearchText]=useState("");
//formulario de busqueda
  return(
    <div>
        <h1>Buscador de tarjetas</h1>
        <div className="search-box">
          <input value={searchText} 
            onChange={({ target: { value }}) => setSearchText(value)}
            className="search-box-input"/>
        <button onClick={() => onSearch(searchText)} disabled={!searchText.length}> Buscar </button>
        </div>
    </div>
  )
}

function Search() {
// encontrar resultados enviador por el formulario
  const [results, setResults] = useState([]);
/* const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get("https://api.github.com/users");
        setData(data);
      } catch(err) {
        console.error(err);
      }
    };

    getUsers().catch(null);
  }, []);
*/
// comprobacion de datos traidos con la base de datos o API
  const handleSearchClick = (searchText) => {
    if (data?.length) {
      const searchTextMinus = searchText.toLowerCase();
      const filteredData = data.filter((value) => (
          value.login.toLowerCase().includes(searchTextMinus) 
        )
      );
      setResults(filteredData);
    }
  };
  return(
    <div className="search">
      <SearchBox onSearch={handleSearchClick}/>
      <SearchResult results={results}/>
    </div>
  );
}

function App(){
  return(
    <div>
      <Search/>
    </div>
  );
}


export default App;
