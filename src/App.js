import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A shade of Blue',
    value: 'blue'
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div
      style={{
        padding: '1rem',
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column'
      }}
    >
      <Header />

      <Route path='/'>
        <Accordion items={items} />
      </Route>

      <Route path='/list'>
        <Search />
      </Route>

      <Route path='/dropdown'>
        <Dropdown
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
          label='Select a color'
        />
        <p
          style={{
            color: selected.value,
            fontWeight: 'bold'
          }}
        >
          This text is {selected.value}!
        </p>
      </Route>

      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  )
}

export default App
