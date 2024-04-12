import { useState } from "react"
export default function Project2(){

    
    const [selected, setSelected] = useState(1);

    const handleSelect = (itemID) => {
        // setSelected(event.target);
        setSelected(itemID)
    }

    function handleRedirect(e){
        e.preventDefault();
    }  ; 
     var DATA = [{
        id:1,
        title:'Basic',
        data:'10GB',
        plan:'$0.99/Month'
    },{
        id:2,
        title:'Standard',
        data:'100GB',
        plan:'$7.99/Month'
    },{
        id:3,
        title:'Premium',
        data:'2TB',
        plan:'$89.99/Month'
    }]
    return (
        <main>
               {/* Main container */}
               <div className="flex flex-col items-center justify-center bg-slate-800 min-h-screen">
                    {/* Inner Container */}
                    <div className="flex flex-col my-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:my-0 ">
                        {/* Cols */}

                        {DATA.map((item,index)=><div onClick={()=>handleSelect(item.id)} key={index} 
                        className={selected === item.id ? "bg-violet-700 text-white rounded-xl cursor-pointer":"bg-slate-700 text-white rounded-xl cursor-pointer"}>
                            {/* upper container */}
                            <div className="p-8 mx-3 mt-3 rounder-t-xl bg-slate-800 rounded-t-xl">
                                <div className="text-center uppercase">{item.title}</div>
                                <h2 className="mt-10 font-serif text-5xl text-center">{item.data}</h2>
                                <h3 className="mt-2 text-center">{item.plan}</h3>
                                <div className="flex justify-center">
                                    <a href="#" aria-disabled={true} onClick={handleRedirect} className={selected === item.id ? "px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 bg-violet-700 hover:border-violet-800" : "px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-700 hover:border-violet-800"}>Purchase</a>
                                </div>
                            </div>

                            {/* Border */}
                            <div className="border border-slate-600 mx-3"></div>

                            {/* Lower container */}
                            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                            <div className="flex flex-col space-y-2">

                                {/* Item 1 */}
                                <div className="flex justify-center  items-center">

                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="16px" height="16px"><linearGradient id="TpFkpHq7AGWb~Tkla4kyga" x1="24" x2="24" y1="6.121" y2="42.039" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#9dffce"/><stop offset="1" stopColor="#50d18d"/></linearGradient><path fill="url(#TpFkpHq7AGWb~Tkla4kyga)" d="M40,42H8c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h32c1.1,0,2,0.9,2,2v32C42,41.1,41.1,42,40,42z"/><linearGradient id="TpFkpHq7AGWb~Tkla4kygb" x1="13" x2="36" y1="24.793" y2="24.793" gradientUnits="userSpaceOnUse"><stop offset=".824" stopColor="#135d36"/><stop offset=".931" stopColor="#125933"/><stop offset="1" stopColor="#11522f"/></linearGradient><path fill="url(#TpFkpHq7AGWb~Tkla4kygb)" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"/>
                                </svg>

                                <span className="text-sm ml-1">{item.data} of Storage</span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex justify-center  items-center">

                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="16px" height="16px"><linearGradient id="TpFkpHq7AGWb~Tkla4kyga" x1="24" x2="24" y1="6.121" y2="42.039" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#9dffce"/><stop offset="1" stopColor="#50d18d"/></linearGradient><path fill="url(#TpFkpHq7AGWb~Tkla4kyga)" d="M40,42H8c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h32c1.1,0,2,0.9,2,2v32C42,41.1,41.1,42,40,42z"/><linearGradient id="TpFkpHq7AGWb~Tkla4kygb" x1="13" x2="36" y1="24.793" y2="24.793" gradientUnits="userSpaceOnUse"><stop offset=".824" stopColor="#135d36"/><stop offset=".931" stopColor="#125933"/><stop offset="1" stopColor="#11522f"/></linearGradient><path fill="url(#TpFkpHq7AGWb~Tkla4kygb)" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"/>
                                </svg>

                                <span className="text-sm ml-1">Option to add members</span>
                                </div>

                                {/* Item 3 */}
                                <div className="flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="16px" height="16px"><linearGradient id="TpFkpHq7AGWb~Tkla4kyga" x1="24" x2="24" y1="6.121" y2="42.039" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#9dffce"/><stop offset="1" stopColor="#50d18d"/></linearGradient><path fill="url(#TpFkpHq7AGWb~Tkla4kyga)" d="M40,42H8c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h32c1.1,0,2,0.9,2,2v32C42,41.1,41.1,42,40,42z"/><linearGradient id="TpFkpHq7AGWb~Tkla4kygb" x1="13" x2="36" y1="24.793" y2="24.793" gradientUnits="userSpaceOnUse"><stop offset=".824" stopColor="#135d36"/><stop offset=".931" stopColor="#125933"/><stop offset="1" stopColor="#11522f"/></linearGradient><path fill="url(#TpFkpHq7AGWb~Tkla4kygb)" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"/>
                                </svg>

                                <span className="text-sm ml-1">Extra member benefit</span>
                                </div>
                            </div>
                            </div>
                        </div>)}
                        
                    </div>
               </div>
        </main>
    )
}