import React from 'react'

export default function Synonyms(props) {
  return (
    <div classNames="Synonyms">
      {props.synonyms.map(function (synonym, index) {
        return <div key={index}>{synonym}</div>
      })}
    </div>
  )
}
