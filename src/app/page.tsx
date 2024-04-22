import Image from "next/image";
import hero from "../../public/assets/hero.png"

import Span from "@/components/Span/Span";

export default function Home() {
   return (
      <div className=" bg-black min-h-screen flex-col w-full ">
         <main className="flex  flex-col items-center justify-between pt-10 gap-8">
            <Image src={hero} alt="logo" priority className=""/>
            <h1 className="text-white text-4xl text-center  ">
               Sistema feito para você organizar seus estudos e terefas.
            </h1>
            <div className=" gap-4 m-4   flex lg:flex-row  sm:flex-col md:flex-col">
               <Span>+ 7mil posts</Span>
               <Span>+ 1 mil comentários</Span>
            </div>
         </main>
        </div>
   );
}

