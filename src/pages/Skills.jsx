import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiSupabase,
  SiFirebase,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiVercel,
  SiNetlify,
  SiVitest,
  SiVite,
  SiDocker,
  SiRedis
} from "react-icons/si"

function Skills() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  
  return (
    <>
      <div className="overflow-hidden	rounded-3xl mb-2 text-center 	 flex flex-col justify-center items-center  p-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 h-fit text-white ">
      <h1 data-aos="fade-right" className="text-2xl text-purple-200 w-fit font-bold mb-5 mt-7 border-b-4 border-purple-400">
          Skills</h1>

        <div data-aos="slide-right" className="w-full rounded-2xl border-purple-600 bg-indigo-900 grid grid-cols-6 max-md:grid-cols-2 gap-y-7	 place-items-center shadow-2xl p-4 mb-4">
        <div className="flex flex-col items-center">
            <SiNextdotjs size={44}/>
            <h2 className=" font-bold">NextJS</h2>
          </div>

         

          
          <div className="flex flex-col items-center">
            <SiReact size={44}/>
            <h2 className="font-bold">React</h2>
          </div>

          <div className="flex flex-col items-center">
            <SiTypescript size={42}/>
            <h2 className="font-bold"> TypeScript</h2>
            
          </div>

          <div className="flex flex-col items-center">
            <SiTailwindcss size={44}/>
            <h2 className="font-bold"> Tailwind</h2>
            
          </div>

          <div className="flex flex-col items-center">
            <SiHtml5 size={44}/>
            <h2 className="font-bold"> HTML</h2>
          </div>

          <div className="flex flex-col items-center">
            <SiCss size={44}/>
            <h2 className="font-bold">CSS</h2>
          </div>

          <div className="flex flex-col items-center">
            <SiJavascript size={44}/>
            <h2 className="font-bold"> Javascript</h2>
          </div>

           <div className="flex flex-col items-center">
            <img src='/zustand1.svg' alt="zustand" className="w-[60px]"/>
            <h2 className="font-bold">Zustand</h2>
          </div>

          
          <div className="flex flex-col items-center">
            <SiExpress size={44}/>
            <h2 className="font-bold"> Express.js</h2>
          </div>

          
          <div className="flex flex-col items-center">
            <SiPrisma size={44}/>
            <h2 className="font-bold"> Prisma ORM</h2>
          </div>

          
          <div className="flex flex-col items-center">
            <SiPostgresql size={44}/>
            <h2 className="font-bold">Postgresql</h2>
          </div>

         <div className="flex flex-col items-center">
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 fill-white"
  >
    <title>Neon</title>
    <path d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z" />
  </svg>

  <h2 className="font-bold">Neon</h2>
</div>

            <div className="flex flex-col items-center">
            
             <SiDocker size={44}/>
            <h2 className="font-bold">Docker</h2>
          </div>
            <div className="flex flex-col items-center">
            
             <SiRedis size={44}/>
            <h2 className="font-bold">Redis</h2>
          </div>
        
          <div className="flex flex-col items-center">
            
             <SiSupabase size={44}/>
            <h2 className="font-bold">Supabase</h2>
          </div>

          <div className="flex flex-col items-center">
            <SiFirebase size={44}/>
            <h2 className="font-bold">Firebase</h2>
          </div>

           <div className="flex flex-col items-center">
            <SiVercel size={44}/>
            <h2 className="font-bold"> Vercel</h2>
          </div>

           <div className="flex flex-col items-center">
            <SiNetlify size={44}/>
            <h2 className="font-bold"> Netlify</h2>
          </div>

           <div className="flex flex-col items-center">
            <SiVite size={44}/>
            <h2 className="font-bold">Vite</h2>
          </div>

           <div className="flex flex-col items-center">
            <SiVitest size={44}/>
            <h2 className="font-bold">Vitest</h2>
          </div>

          
        </div>
        
      </div>
    </>
  );
}

export default Skills