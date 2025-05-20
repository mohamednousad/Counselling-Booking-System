import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Spin } from 'antd'

const Test = lazy(() => import('../views/Test'))
const NotFound = lazy(() => import('../views/NotFound'))
const Home = lazy(() => import('../views/appViews/Home'))
const Booking = lazy(() => import('../views/appViews/Booking'))
const Login = lazy(() => import('../views/appViews/Login'))

const RoutesPage = () => (
  <Router>
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          <Spin
            size='large'
            tip='Loading...'
            style={{ fontSize: '24px', transform: 'scale(2)' }} // Enlarges the spinner
          />
        </div>
      }
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/login' element={<Login />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
)

export default RoutesPage
