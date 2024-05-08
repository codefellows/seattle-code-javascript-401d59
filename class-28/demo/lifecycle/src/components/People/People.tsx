import React, { useEffect, useState } from 'react';

function People({ count }: { count: number }): React.ReactElement {

  const [people, setPeople] = useState<Array<{name: string}>>([]);

  const addPerson = () => {
    setPeople([...people, {name: 'I AM A PERSON'}]);
  }

  // 4 places to utilize useEffect

  // mounting -> function only runs on mount
  useEffect(() => {
    console.log('PEOPLE HAVE MOUNTED!!');

    // load data BEFORE render. -> you can update state here.

  }, []); // passing an empty array means this useEffect callback will only run on mount.

  // this will run anytime something change and a re-render is necessary.
  useEffect(() => {
    console.log('I Will run a lot');

    // never make state changes here.
  });

  // Component has updated life cycle event.
  useEffect(() => {
    console.log('PEOPLE HAVE CHANGES');

    // DON'T CHANGE PEOPLE HERE!
  }, [people]); // callback runs everytime something in the dependency list changes;

  useEffect(() => {
    console.log('Count has Changed');
  }, [count]); // only when count changes

  // Component has unmounted
  useEffect(() => {

    // clean-up, occurs on un-mount
    return () => {
      console.log('PEOPLE HAS UN-MOUNTED');
    }
  },[]);

  return(
    <div>
      <h1>People!</h1>
      <button onClick={addPerson}>Add a Person</button>
    </div>
  )
}

export default People;