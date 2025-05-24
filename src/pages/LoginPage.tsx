import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { mockUsers } from "../mock/users";
import { AppDispatch } from "../app/store";
import styled from "styled-components";

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
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = () => {
    const user = mockUsers.find((u) => u.username === username)

    if (!user) {
      setError(true)
      return
    }

    dispatch(login(user))
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
