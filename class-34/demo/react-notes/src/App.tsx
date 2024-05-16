import {useContext} from 'react';
import Login from './components/auth/Login';
import Auth from './components/auth/Auth';
import NoteList from './components/NoteList/NoteList';
import NoteForm from './components/NoteForm/NoteForm';
import {ListContext} from './context/list';
import './App.css'

function App() {

  const { addListItem } = useContext(ListContext);

  return (
    <>
    <header>
      <h1>React Notes App</h1>
      <Login />
    </header>
    <main style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Auth capability="create">
        <NoteForm onSubmit={addListItem}/>
      </Auth>
      <Auth capability="read">
        <NoteList />
      </Auth>
    </main>
    </>
  )
}

export default App
