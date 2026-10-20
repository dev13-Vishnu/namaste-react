const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
          className="logo"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;