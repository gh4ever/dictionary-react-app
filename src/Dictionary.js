import React, { useState } from 'react'
import axios from 'axios'
import Result from './Result'
import './Dictionary.css'

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState('')
  let [result, setResult] = useState(null)

  function handleResponse(response) {
    setResult(response.data[0])
  }

  function search(event) {
    event.preventDefault()
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    console.log(apiUrl)
    axios.get(apiUrl).then(handleResponse)
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <label>What word do you want to know?</label>
          <br />
          <input
            type="search"
            placeholder="Type a word + Enter"
            defaultValue={props.defaultKeyword}
            autoFocus={true}
            className="form-control search-input"
            onChange={handleKeywordChange}
          />
        </form>
        <small className="hint">i.e. pink, cheshire, cat, with, stripe</small>
      </section>
      <Result result={result} />
    </div>
  )
}
