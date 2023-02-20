import { GithubSVG, LinkedInSVG, SparkboxSVG } from '.';

export const SocialLinks = () => {
  return (
    <section id="contact" className="social-links" aria-label="contact links">
      <div aria-hidden="true" className="social-links__left">
        <img src="images/annie-spratt-peonies2.jpg" alt="" />
      </div>
      <div className="social-links__links social-links__right">
        <a href="https://github.com/catheraaine"className="social-links__link">
          <GithubSVG />
          <div>GitHub</div>
        </a>
        <a href="https://foundry.sparkbox.com/foundry/author/catherine_meade" aria-label="Catherine's Page on the Sparkbox Blog" className="social-links__link">
          <SparkboxSVG />
          <div>The Sparkbox Foundry</div>
        </a>
        <a href="https://www.linkedin.com/in/catheraaine/" aria-label="Catherine's LinkedIn Account" className="social-links__link">
          <LinkedInSVG />
          <div>LinkedIn</div>
        </a>
      </div>
    </section>
  )
};
