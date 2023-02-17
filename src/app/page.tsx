import { PageHeader, Navigation, SocialLinks, PageBreak } from "@/components";


export default function Home() {
  return (
    <>
      <Navigation />
      <div className="page">
        <PageHeader />
        <main>
          <PageBreak />
          <SocialLinks />
        </main>
      </div>
    </>
  )
}
