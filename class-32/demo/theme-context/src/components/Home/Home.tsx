// How do we consume from context??
import { useContext } from 'react';
import { ThemeContext } from '../../context/Theme';

export default function Home() {

  const { primaryColor, secondaryColor } = useContext(ThemeContext);
  return (
    <main style={{ backgroundColor: primaryColor, color: secondaryColor }}>
      <h1>Welcome to my home page!</h1>
      <p>Here is some content!</p>
    </main>
  )
}