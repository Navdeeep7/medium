import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Blog } from './pages/blog'
import { Blogs } from './pages/blogs'
import { PublishPage } from './pages/publish'
import { Homepage } from './pages/homepage'
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/blog/:id' element={<Blog/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/publish' element={<PublishPage/>}/>
      <Route path='/' element={<Homepage/>} />
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
