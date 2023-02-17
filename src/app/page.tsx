import { PageHeader, Navigation, SocialLinks } from "@/components";


export default function Home() {
  return (
    <>
      <Navigation />
      <div className="page">
        <PageHeader />
        <main>
          <SocialLinks />
        </main>
      </div>
    </>
  )
}
