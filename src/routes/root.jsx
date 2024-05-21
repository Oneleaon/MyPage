import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <div class='sidebar'>
      <h1>Info</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>About Me</Link>
          </li>
          <li>
            <Link to='/'>Experience</Link>
          </li>
          <li>
            <Link to='/'>Education</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}