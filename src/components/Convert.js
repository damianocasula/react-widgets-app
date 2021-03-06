import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState('')
  const [debouncedText, setDebouncedText] = useState(text)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [text])

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: GOOGLE_API_KEY
          }
        }
      )

      setTranslatedText(data.data.translations[0].translatedText)
    }
    doTranslation()
  }, [language, debouncedText])

  return (
    <div>
      <p>{translatedText}</p>
    </div>
  )
}

export default Convert
