import { useState } from "react";
import { useAuthStore } from "../app/store/store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mockUsers } from "../mock/users";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false)
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const handleLogin = () => {
    const user = mockUsers.find((u) => u.username === username)

    if (!user) {
      setError(true)
      return
    }

    login(user)
    navigate(`/${user.role}`)
  }

  return (
    <Wrapper>
      <h2>Вход</h2>
      <input
        type="text"
        placeholder="Введите username"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>

      {error && (
        <p style={{ color: 'red' }}>Пользователь не найден</p>
      )}
    </Wrapper>
  );
};
