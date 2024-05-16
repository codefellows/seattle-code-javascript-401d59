import Auth from '../../components/auth/Auth';

export default function NoteItem({ note }) {
  return (
    <>
      <p>{note.category}</p>
      <p>{note.text}</p>
      <Auth capability="update">
        <button>Edit</button>
      </Auth>
      <Auth capability="delete">
        <button>Delete</button>
      </Auth>
    </>
  )
}