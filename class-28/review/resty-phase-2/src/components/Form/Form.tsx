import React, { useState } from 'react';

interface FormProps {
  handleSubmit: (arg0: {method: string, url: string}) => void;
}

function Form({ handleSubmit }: FormProps): React.ReactElement {
  const [loading, setLoading] = useState(false);
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');

  const handleEvent = (e: React.FormEvent): void => {
    e.preventDefault();
    let url = e.currentTarget.url.value;
    console.log('form inputs', { method, url });
    handleSubmit({ method, url });
  }

  return (
    // render text input for URL, buttons for request method, textarea for JSON body.
    <form onSubmit={handleEvent}>
      <input data-testid="url-input" type="text" name="url" />
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
