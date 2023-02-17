import { PageHeader, Navigation, SocialLinks, About } from "@/components";


export default function Home() {
  return (
    <>
      <Navigation />
      <div className="page">
        <PageHeader />
        <main>
          <About />
          <SocialLinks />
        </main>
      </div>
    </>
  )
}
