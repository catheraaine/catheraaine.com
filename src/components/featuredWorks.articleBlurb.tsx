interface ARTICLE_BLURB_PROPS {
  publication: string,
  articleTitle: string,
  description?: string,
  imageSource?: string,
  youtubeEmbed?: () => JSX.Element,
  linkURL: string,
  linkLabel: string,
  linkText: string
}

export const ArticleBlurb = ({
  publication,
  articleTitle,
  description,
  imageSource,
  youtubeEmbed,
  linkURL,
  linkLabel,
  linkText
}: ARTICLE_BLURB_PROPS) => {
  return (
    <div className="article-blurb">
      <div className="article-blurb__left">
        {youtubeEmbed ?
          youtubeEmbed()
        :
          (<img src={imageSource} alt=""/>)
        }
      </div>
      <div className="article-blurb__right">
        <h3>{articleTitle}</h3>
        <h4>{publication}</h4>
        {description && (<p>{description}</p>)}
        <a href={linkURL} aria-label={linkLabel}>{linkText}</a>
      </div>
    </div>
  )
}
