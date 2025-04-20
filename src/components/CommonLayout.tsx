import { Outlet, Link} from 'react-router-dom';
import styled from 'styled-components';


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

type MenuItem = {
  path: string;
  label: string;
}

type CommonLayoutProps = {
  title: string;
  menuItems: MenuItem[];
  onLogout?: () => void
}

export const CommonLayout = ({title, menuItems, onLogout} : CommonLayoutProps) => {

  return (
    <LayoutContainer>
      <Sidebar>
        <h3>{title}</h3>
        {menuItems.map((item) => (
          <NavItem key={item.path} to={item.path}>{item.label}</NavItem>
        ))}

        {onLogout && (
          <>
            <hr />
            <button onClick={onLogout}>🚪 Выйти</button>
          </>
        )}

      </Sidebar>

      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  );
};