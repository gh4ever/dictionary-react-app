import React, { useState, useEffect } from 'react'
import { ThemeContext, themes } from './ThemeContext'

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light)

  function changeTheme(theme) {
    setTheme(theme)
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content')
        document.body.classList.remove('black-context')
        break
      case themes.dark:
        document.body.classList.add('black-context')
        document.body.classList.remove('white-content')
        break
      default:
    }
  }, [theme])
  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
