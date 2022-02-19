import React, { useState } from 'react'
import './Dictionary.css'

export default function Dictionary () {
    return (
        let [keyword, setKeyword] = useState("");

        function handleSubmit (event) {
            event.preventDefault();
            alert(`Searching for the ${keyword}!`);
        }

        function handlekeywordChange (event) {
            event.preventDefault();
            console.log(event.target.value);
        }

        <div className="Dictionary">
            <form onSubmit={handleSubmit} >
                <input type="search" onChange={handlekeywordChange} />
            </form>
        </div>
    )
}

