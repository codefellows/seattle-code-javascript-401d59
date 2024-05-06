import React from 'react';

// Form receives a function to handle Submission


// render a text input, uses the input value on submission
interface FormProps {
  onSubmit: (arg0: string, arg1: string) => void,
}

function Form(props: FormProps): React.ReactElement {

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // grab values from event objects
    const urlValue = e.target.url.value;
    const srcValue = e.target.src.value;
    props.onSubmit(urlValue, srcValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="url"/>
      <input type="text" name="src" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
