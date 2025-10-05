import React,{ useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

function Dictionary(props) {

let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

function handleResponse(response){
setResults(response.data[0]);
}

function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}

function handlesubmit(event){
event.preventDefault();
search();
}
  
function handleKeywordChange(event){
    setKeyword(event.target.value);
} 

function load(){
    setLoaded(true);
    search();
}

if (loaded) {
return (
    <div className="Dictionary">

<section>
    <h1 className="greet">Type a word and i'll tell you the meaning!</h1>
        <form onSubmit={handlesubmit}>
            <input
            type="search" 
            autoFocus={true} 
            placeholder="Type a word..."
            defaultValue={props.defaultKeyword}
            onChange={handleKeywordChange} />
        </form>
        
        <div className="hint">
           suggested words: sunset, yoga, forest... 
        </div>


</section>
    <Results results={results}/>
    
    </div>   
);
}  else {
    load();
    return "Loading..."
}
}

    export default Dictionary;