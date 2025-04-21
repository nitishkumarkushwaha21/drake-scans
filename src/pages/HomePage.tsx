

import Body1 from "../components/Body1"
import Body2 from "../components/Body2"
import Body3 from "../components/Body3"

export default function HomePage() {
  return (
    <div className="bg-zinc-900 ">
   
    <Body1/>
    <Body2/>
    <Body3/>
    

  
   <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed bottom-6 right-10 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition px-5 text-xl"
>
⇭
</button>
   </div>


  )
}
