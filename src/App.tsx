
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Protected from './pages/Login/Protected'
import Users from './pages/users/Users'
import Layout from './components/Layout/Layout'
import UserDetail from './pages/users/UserDetail'
import CreateUser from './pages/users/CreateUser'
import EditUser from './pages/users/EditUser'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route element={<Protected />} >
              <Route index element={<Navigate to={'/users'} />} />
              <Route path='users' element={<Users />} />
              <Route path='users/create' element={<CreateUser />} />
              <Route path='users/edit/:id' element={<EditUser />} />
              <Route path='users/:id' element={<UserDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
