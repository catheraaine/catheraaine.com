import { GithubSVG, LinkedInSVG, SparkboxSVG } from '.';

export const SocialLinks = () => {
  return (
    <section id="contact" className="social-links">
      <h2 className="social-links__heading">Get in Touch</h2>
      <div className="social-links__links">
        <a href="https://github.com/catheraaine"className="social-links__link">
          <GithubSVG />
          <div>Github</div>
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
