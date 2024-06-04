import Root from './root';
import { Link } from 'react-router-dom';

export default function() {
  return(
    <>
      <div class='mainbody'>
        <h1>Welcome to My Page!</h1>
        <p class='secret'>There may be secret text around</p>
        <p>Welcome to my corner of the internet!</p>
        <p>Enjoy your stay and you're welcome to learn more about me while you're here.</p>
      </div>
      <div class='row'>
        <div class='col'>
          <Link to='/aboutme' class='homeLink'>About me</Link>
        </div>
        <div class='col'>
          <Link to='/aboutme' class='homeLink'>Skills</Link>
        </div>
      </div>
      <div class='row'>
        <div class='col'>
          <Link to='/aboutme' class='homeLink'>Education</Link>
        </div>
        <div class='col'>
          <Link to='/aboutme' class='homeLink'>Experience</Link>
        </div>
      </div>
    </>
  );
}