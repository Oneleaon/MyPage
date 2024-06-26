import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <div class='sidebar'>
      <h1 class='sidebarh1'>Sections</h1>
      <hr class='eighty'/>
      <nav>
        <ul>
          <li>
            <Link to='/' class='sidebarLink'>Home</Link>
          </li>
          <hr class='ten' />
          <li>
            <Link to='/aboutme' class='sidebarLink'>About Me</Link>
          </li>
          <hr class='ten' />
          <li>
            <Link to='/skills' class='sidebarLink'>Skills</Link>
          </li>
          <hr class='ten' />
          <li>
            <Link to='/experience' class='sidebarLink'>Experience</Link>
          </li>
          <hr class='ten' />
          <li>
            <Link to='/education' class='sidebarLink'>Education</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}