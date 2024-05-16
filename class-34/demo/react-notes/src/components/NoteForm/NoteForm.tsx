import { useState } from 'react';

export default function NoteForm({ onSubmit }) {
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text, category });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Note Category" onChange={(e) => setCategory(e.target.value)} />
      <input type="text" placeholder="Note Text" onChange={(e) => setText(e.target.value)} />
      <button type="submit">Create Note</button>
    </form>
  )
}