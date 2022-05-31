import React, { useState, useEffect } from 'react'

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('New language or text:', language, text)
    // POST https://translation.googleapis.com/language/translate/v2
  }, [language, text])

  return <div>Convert</div>
}

export default Convert
