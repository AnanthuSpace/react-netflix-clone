function NavBar() {
  return (
    <div className="navbar_main">
      <div className="navbar_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
        <ul>
          <li>
            <b>Home</b>
          </li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>My List</li>
        </ul>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="profile"
        className="navbar_avatar"
      />
    </div>
  );
}

export default NavBar;
