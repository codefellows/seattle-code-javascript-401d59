import { useContext, useEffect } from 'react'
import { ListContext } from '../../context/list';
import NoteItem from './NoteItem';

export default function NoteList() {
  // list state might need to be lifted
  const contextState = useContext(ListContext);
  
  useEffect(() => {
    // fetch our notes from the server
    contextState.fetchListItems();
  }, []);

  return(
    <div>
      <h2>Your Notes</h2>
      {contextState.list.map(note => {
        return <NoteItem note={note} />
      })}
    </div>
  )
}
