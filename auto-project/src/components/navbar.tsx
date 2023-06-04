import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserProvider';

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Auto Project
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/autolist">Auto List</CustomLink>
        {user.token || localStorage.getItem('token') ? (
          <CustomLink to="/logout">Logout</CustomLink>
        ) : (
          <>
            <CustomLink to="/register">Register</CustomLink>
            <CustomLink to="/signin">Sign In</CustomLink>
          </>
        )}
      </ul>
    </nav>
  );
}