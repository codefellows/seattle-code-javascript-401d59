import React from 'react';

import './Form.scss';

interface FormProps {
  handleApiCall: (formData: {
    method: string;
    url: string
  }) => void;
}

const Form: React.FunctionComponent<FormProps> = ({ handleApiCall }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    handleApiCall(formData);
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
}

export default Form;
