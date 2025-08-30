import React,{ useState } from "react";
import "./Dictionary.css";

function Dictionary() {

let [keyword, setKeyword] = useState("");

function search(event){
event.preventDefault();
alert(`Searching for ${keyword} definition`);
        }
  
function handleKeywordChange(event){
    setKeyword(event.target.value);
}  
        return (
    <div className="Dictionary">


        <form onSubmit={search}>
            <input
            type="search" 
            autoFocus={true} 
            placeholder="Type a word..."
            onChange={handleKeywordChange} />
        </form>
    
    
    </div>   
);}

    export default Dictionary;