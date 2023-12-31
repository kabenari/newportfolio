import HeroSection from "./components/herosection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-0 py-0">
      <NavBar/>
      <div className="container mx-auto px-12 py-14 ">
        <HeroSection/>
      </div>
    </main>
  )
}
