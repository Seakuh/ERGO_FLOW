import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import Dashboard from './pages/Dashboard'
import Exercises from './pages/Exercises'
import ExerciseDetail from './pages/ExerciseDetail'
import Wiki from './pages/Wiki'
import WikiArticle from './pages/WikiArticle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/:id" element={<ExerciseDetail />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/wiki/:slug" element={<WikiArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
