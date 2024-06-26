import Image from "next/image";
import { futura } from "../fonts.ts"

// Cytoplasm
// Image #1 from: https://sciencing.com/cytoplasm-definition-structure-function-with-diagram-13717294.html
// Image #2 from: [link goes here]
export default function Home() {
    return (
        <main className={`${futura.className} flex flex-col h-screen`}>
            <div className="rounded-lg bg-gradient-to-r from-nice-yellow-600 to-nice-yellow-500 p-7 mx-4 mb-2 mt-4">
                <h1 className="text-black text-center text-6xl font-black p-2 underline decoration-3 decoration-nice-purple-600 decoration-double">Cytoplasm</h1>
                <h2 className="text-black text-center text-3xl font-bold mt-2 italic">Cellular Soup</h2>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-0 bg-gradient-to-b from-nice-blue-100 to-nice-blue-200 rounded-lg mt-0 w-screen-4 flex-grow mx-4">
                <div className="flex flex-row">
                    <div className="flex-grow flex-auto bg-nice-yellow-400 rounded-lg mx-4 mt-4 mb-2">
                        <p className="text-black text-left text-3xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            The <a className="font-extrabold text-nice-blue-600">cytoplasm</a> is the semifluid substance of the cell that is outside the 
                            nuclear membrane, but inside the cell membrane. It contains all of the cell’s 
                            organelles, such as the mitochondria, the endoplasmic reticulum, the golgi 
                            apparatus, and more. The <a className="font-extrabold text-nice-pink-600">cytoskeleton</a> gives the cell its shape and structure. 
                            Finally, the cytoplasm is made of a fluid substance called <a className="font-extrabold text-nice-purple-600">cytosol</a>. 
                            Many important chemical reactions within the cell take place in the cytoplasm. 
                            For example, part of <a className="font-extrabold text-nice-blue-600">cellular respiration</a> occurs in the cytoplasm.
                        </p>
                    </div>
                    <div className="mr-4 self-center shrink-0">
                        <Image src="/images/cytoplasm.jpg" alt="" className="rounded-lg border-8 border-solid border-nice-yellow-500 object-contain max-h-96 max-w-96" width={500} height={500}/>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="ml-4 self-center shrink-0">
                        <Image src="/images/cytoskeleton_parts.png" alt="" className="rounded-lg border-8 border-solid border-nice-yellow-500 object-contain" width={400} height={400}/>
                    </div>
                    <div className="flex-grow flex-auto bg-nice-yellow-400 rounded-lg mx-4 mt-2 mb-4">
                        <p className="text-black text-left text-3xl font-semibold mx-4 my-4 indent-6 leading-loose">
                            Initially discovered in 1903 by Nikolai K. Koltsov, the cytoskeleton is made of a complex network of protein filaments. 
                            The three main components that make up the cytoskeleton are microfilaments, 
                            intermediate filaments, and microtubules. For some time after its discovery, it was thought of 
                            as uninteresting, but it is actually quite complex. In eukaryotes, it extends out from the nucleus to the cell membrane. 
                            Its main purpose is to help maintain the shape and structure of the cell, and it 
                            is also capable contracting in order to allow cells to migrate.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
