import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <div class='sidebar'>
      <div><Link to='/' class='sidebarHome'>Sections</Link></div>
      <nav>
        <ul>
          <li>
            <Link to='/' class='sidebarLink'>Home</Link>
          </li>
          <li>
            <Link to='/aboutme' class='sidebarLink'>About Me</Link>
          </li>
          <li>
            <Link to='/skills' class='sidebarLink'>Skills</Link>
          </li>
          <li>
            <Link to='/experience' class='sidebarLink'>Experience</Link>
          </li>
          <li>
            <Link to='/education' class='sidebarLink'>Education</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}