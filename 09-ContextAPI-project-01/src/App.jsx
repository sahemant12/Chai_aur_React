import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider.jsx"

function App() {

  return (
    <>
    <UserContextProvider>
      <p className="bg-gray-500">Hello</p>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
