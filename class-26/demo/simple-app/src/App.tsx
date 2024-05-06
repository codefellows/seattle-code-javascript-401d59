import React, { useState } from 'react'
import Header, { Link } from './components/Header/Header';
import Form from './components/Form/Form';
import './App.css'

// class App extends React.Component {

// }
// Function Component => returns JSX
// no need to declare a render method.
// class components use 'this', function components never use 'this'. Syntax is very staightforward.

// replace all 'this' features with hooks.

function App(): React.ReactElement {
  // useState returns 2 things in an ordered Array
  // [0] getter, this will always return the current value in React State.
  // [1] setter, a function that changes the value of the state getter.
  // const [state, setState] = useState({
  //   list: []
  // })
  const [list, setList] = useState<Array<Link>>([]) // use generic types to declare types for useState hook.

  const createLink = (url: string, src: string): void => {
    const link: Link = { href: url, src };

    setList([...list, link]);
  }

  // [{
  //   href: "https://vitejs.dev", src: viteLogo
  // }, {
  //     href: "https://react.dev", src: reactLogo
  //   }]
  return (
    <>
      <div>
        <Header
          title="My Awesome App"
          links={list}
          />
      </div>
      <div className="card">
        {/* <button onClick={() => createLink('https://google.com', 
        'http://placehold.it/40x40')}>
          Add A Link
        </button> */}
        <Form onSubmit={createLink} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
