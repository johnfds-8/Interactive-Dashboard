import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">

        <img src="logo.svg" alt="" />
        <span>Admin Panel</span>
      </div>

      <div className="icons">

        <img src="/search.svg" alt="" className="icons" />

        <img src="/app.svg" alt="" className="icons" />

        <img src="/expand.svg" alt="" className="icons" />

        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>

        <div className="user">
          <img
            src="https://lh3.googleusercontent.com/ogw/AF2bZyjmghQnwubyv8dB0C_nEj57G4yxxyrW5u1zKas1S0iwclNY=s32-c-mo"
            alt=""
          />
          <span>John</span>
        </div>

        <img src="/settings.svg" alt="" className="icons" />
      </div>
    </div>
  );
}

export default Navbar;
