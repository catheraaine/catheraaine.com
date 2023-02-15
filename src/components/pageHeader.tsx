interface PAGE_HEADER_PROPS {
  pageTitle: string,
}

export const PageHeader = () => {
  return (
    <header className="page-header">
      <div className="page-header__bottom-left">
        <h1 className="page-header__name">
          <div>Catherine</div>
          <div>&nbsp;Meade</div>
        </h1>
      </div>

      <div aria-hidden="true" className="page-header__top-right">
        <div className="page-header__decorative-image">
          <img src="images/annie-spratt-peonies5b.png" alt="" />
        </div>
      </div>
    </header>
  )
}
