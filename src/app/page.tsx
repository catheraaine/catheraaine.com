import {
  PageHeader,
  Navigation,
  SocialLinks,
  About,
  FeaturedWorks,
  Footer
} from "@/components";


export default function Home() {
  return (
    <>
      <Navigation />
      <div className="page">
        <PageHeader />
        <main>
          <About />
          <SocialLinks />
          <FeaturedWorks />
        </main>
        <Footer />
      </div>
    </>
  )
}
