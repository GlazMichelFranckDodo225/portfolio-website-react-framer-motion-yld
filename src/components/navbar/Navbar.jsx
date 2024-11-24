import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Glaz Dodo | Développeur Backend - Formateur | Java - Spring | Freelance</span>
            <div className="social">
                <a href="#"><img src="/public/facebook.png" alt="Facebook Logo" /></a>
                <a href="#"><img src="/public/instagram.png" alt="Instagram Logo" /></a>
                <a href="#"><img src="/public/youtube.png" alt="YouTube Logo" /></a>
                <a href="#"><img src="/public/dribbble.png" alt="Dribble Logo" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
