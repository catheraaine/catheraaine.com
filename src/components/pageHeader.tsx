interface PAGE_HEADER_PROPS {
  pageTitle: string,
}

export const PageHeader = ({pageTitle}: PAGE_HEADER_PROPS) => {
  return (
    <header className="page-header">
      <h1>{pageTitle}</h1>
    </header>
  )
}
