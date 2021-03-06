import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Portuguese',
    value: 'pt'
  },
  {
    label: 'Russian',
    value: 'ru'
  },
  {
    label: 'Spanish',
    value: 'es'
  },
  {
    label: 'Icelandic',
    value: 'is'
  }
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0])
  const [text, setText] = useState('')

  return (
    <>
      <div className='ui form'>
        <div className='field'>
          <label className='label'>Enter Text</label>
          <input value={text} onChange={e => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label='Select a language'
      />

      <hr />

      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language} />
    </>
  )
}

export default Translate
