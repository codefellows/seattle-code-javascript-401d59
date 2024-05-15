import AuthProvider, { AuthContext } from './context/Auth';
import Auth from './components/Auth';
import List from './components/List';
import './App.css'

function App() {

  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(context) => {
          return <button onClick={context.logout}>Logout</button>
        }}
      </AuthContext.Consumer>
      <Auth capability={'read'}>
        <List />
      </Auth>
    </AuthProvider>
  )
}

export default App
