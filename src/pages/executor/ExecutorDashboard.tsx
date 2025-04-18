import { useNavigate } from "react-router-dom"

export const ExecutorDashboard = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <button onClick={() => navigate('projects')}>Проекты</button>
      <button onClick={() => navigate('chat')}>Чат</button>
      <button onClick={() => navigate('docs')}>Стандарты</button>
    </div>
  )
}