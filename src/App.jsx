import { Route, Routes } from "react-router"
import Dashbord from "./pages/Dashbord"
import PostDetail from "./pages/PostDetail"
import Registeration from "./pages/Registeration"
import Signin from "./pages/Signin"


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashbord />}/>
        <Route path='/login' element={<Signin />} />
        <Route path="/register" element={<Registeration />} />
        <Route path='/post/:postId' element={<PostDetail />} />
      </Routes>
    </>
  )
}

export default App
