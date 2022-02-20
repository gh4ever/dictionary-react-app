import React from 'react'
import './Meaning.css'

export default function Meaning(props) {
  console.log(props.meaning)
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong> {definition.definition}
              <br />
              <strong>Example: </strong>
              <em>{definition.example}</em>
              <strong>Synonyms: </strong>
              <Synonyms synonym={definition.synonyms} />
            </p>
          </div>
        )
      })}

      <p>{props.meaning.definitions[0].definitions}</p>
      <p>{props.meaning.definitions[0].example}</p>
    </div>
  )
}
