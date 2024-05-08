import React, { useState } from 'react';

interface FormProps {
  handleSubmit: (arg0: {method: string, url: string}) => void;
}

function Form({ handleSubmit }: FormProps): React.ReactElement {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  const handleEvent = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('form inputs', { method, url });
    handleSubmit({ method, url });
  }

  return (
    // render text input for URL, buttons for request method, textarea for JSON body.
    <form onSubmit={handleEvent}>
      <input data-testid="url-input" type="text" onChange={(e) => setUrl(e.target.value)} />
      <div>
        <button onClick={() => setMethod('GET')}>GET</button>
        <button onClick={() => setMethod("POST")}>POST</button>
        <button onClick={() => setMethod("PUT")}>PUT</button>
        <button onClick={() => setMethod("PATCH")}>PATCH</button>
        <button onClick={() => setMethod("DELETE")}>DELETE</button>
      </div>
      <button type="submit">GO</button>
    </form>
  )
}

export default Form;
