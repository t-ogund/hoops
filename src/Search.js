import React, {useState, useEffect} from "react";
import Profile from "./Profile";

function Search() {

    const [responseData, setResponseData] = useState([]);
    const [items, setItems] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function changeLetter(e) {
     
    }

    useEffect(() => {
        fetch("https://api-nba-v1.p.rapidapi.com/players/league/standard", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b83c4c021amsh3983c7298d63292p1155a9jsnaa9b026a3b17",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
    setItems(data)
    // console.log(items.api.players[704])
    console.log(items)

})
.catch(err => {
	console.error(err);
});
    }, [])
    return(
        <React.Fragment>
            <header className="header">
                <div className="logo-container">
                    
                </div>
                <div className="input-container">
                    <input onChange={changeLetter} className="input" type="text" />
                    
                </div>
            </header>
            <Profile />
        </React.Fragment>
    )
}

export default Search