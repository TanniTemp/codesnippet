import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
   <div className="w-screen bg-accent min-h-screen p-5">
          <Nav/>
          <Hero/>
   </div>
  );
}
