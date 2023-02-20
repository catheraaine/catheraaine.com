import { PageHeader, Navigation, SocialLinks, About, Footer } from "@/components";


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
        <Footer />
      </div>
    </>
  )
}
