import UserProfileLogo from "./images/user-profile.png";
import "./Header.css";

export default function Header() {
  return (
    <header id="header">
      <>
        <img src={UserProfileLogo} alt="User Profile Logo" />
      </>
      <>
        <h4 id="header-title">User Profiles</h4>
      </>
      <h1>I'm here!</h1>
    </header>
  );
}
