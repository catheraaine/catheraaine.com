interface ICON_LINK_PROPS {
  link: string;
  label: string;
  iconSource: string;
}

export const IconLink = ({link, label, iconSource}: ICON_LINK_PROPS) => {
  return (
    <a href={link} aria-label={label}>
      <img src={iconSource} alt="" />
    </a>
  )
};
