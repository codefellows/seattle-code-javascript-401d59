import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/Theme';

export default function ThemeSettings() {

  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');

  const { error, updatePrimaryColor, updateSecondaryColor } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePrimaryColor(primary);
    updateSecondaryColor(secondary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        onChange={(e) => setPrimary(e.target.value)}
        label="Primary Color"
        description="Change the primary color of the app"
        placeholder="#ffffff"
      />
      <TextInput
        onChange={(e) => setSecondary(e.target.value)}
        label="Secondary Color"
        description="Change the secondary color of the app"
        placeholder="#000000"
      />
      {error ? <h2>{error}</h2> : null}
      <Button type="submit">Update Theme!</Button>
    </form>
  )
}