import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      'https://translation.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: GOOGLE_API_KEY
        }
      }
    )
  }, [language, text])

  return <div>Convert</div>
}

export default Convert
