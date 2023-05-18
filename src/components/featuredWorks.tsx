import { ArticleBlurb } from "./featuredWorks.articleBlurb";
import { FEATURED_WORKS_DATA } from "./featuredWorks.data";

export const FeaturedWorks = () => {
  return (
    <section id="featured-works" className="featured-works">
      <div className="featured-works__content">
        <h2>Featured Works</h2>
        {FEATURED_WORKS_DATA.map((article) => (
          <ArticleBlurb key={article.id} {...article} />
        ))}
      </div>
    </section>
  )
};
