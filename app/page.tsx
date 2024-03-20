import Encryption from '@/components/sections/Encryption';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
