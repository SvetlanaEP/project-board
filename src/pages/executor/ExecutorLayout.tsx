// src/pages/executor/ExecutorLayout.tsx
import { Outlet, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthStore } from '../../app/store/store';


const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.nav`
  width: 220px;
  background-color: #f4f4f4;
  padding: 20px;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
`;

const NavItem = styled(Link)`
  display: block;
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

export const ExecutorLayout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <LayoutContainer>
      <Sidebar>
        <h3>Меню</h3>
        <NavItem to="/executor">🏠 Главная</NavItem>
        <NavItem to="/executor/projects">📁 Проекты</NavItem>
        <NavItem to="/executor/chat">💬 Чат</NavItem>
        <NavItem to="/executor/standards">📄 Стандарты</NavItem>
        <hr />
        <button onClick={handleLogout}>🚪 Выйти</button>
      </Sidebar>

      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  );
};
