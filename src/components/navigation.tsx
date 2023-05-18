export const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="#about" className="navigation__link">About</a>
      <span className="navigation__spacer" aria-hidden="true">♥</span>
      <a href="#contact" className="navigation__link">Contact</a>
      <span className="navigation__spacer" aria-hidden="true">♥</span>
      <a href="#featured-works" className="navigation__link">Featured Works</a>
    </nav>
  )
};
