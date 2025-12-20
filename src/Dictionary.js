import React,{ useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos.js";

export default function Dictionary(props) {

let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleDictionResponse(response){
setResults(response.data[0]);
}

function handlePexelsResponse(response){
setPhotos(response.data.photos);
}

function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

const pexelApiKey = "DA1yJpUJwQaRYqSvJwxKPouhlvv2DCGmspP5dTbRDFesttUdmikfjteJ";
const pexelsapiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;

const headers = {Authorization : pexelApiKey};
axios.get(pexelsapiUrl, { headers: headers}).then(handlePexelsResponse);
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
    <Photos photos={photos}/>
    </div>   
);
}  else {
    load();
    return "Loading..."
}
}
