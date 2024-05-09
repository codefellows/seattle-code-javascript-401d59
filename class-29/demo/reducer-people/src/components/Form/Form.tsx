import React, { useState } from 'react';

interface FormProps {
  createPerson: (arg0: { name: string }) => void;
}

function Form({ createPerson }: FormProps): React.ReactElement {
  const [name, setName] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPerson({ name });
  }


  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Type a name" type="text" onChange={(e) => setName(e.target.value)}/>
      <button type="submit">Create Person!</button>
    </form>
  )

}

export default Form;