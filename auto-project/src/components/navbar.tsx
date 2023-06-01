import { Link , useMatch, useResolvedPath } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">Auto Project</Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/autolist">Auto List</CustomLink>
        <CustomLink to="/signin">Sign In</CustomLink>
      </ul>
    </nav>
  );
}
