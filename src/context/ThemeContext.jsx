import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { themes } from '../constants/themes'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('cyberpunk')

  const value = {
    theme: themes[currentTheme],
    setTheme: setCurrentTheme,
    currentTheme
  }

  return (
    <div className={themes[currentTheme].background}>
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}