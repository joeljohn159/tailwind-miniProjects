export default function Project1() {
    return (

        // background
        <main className="flex items-center justify-center bg-zinc-600 h-screen ">
            {/* Card */}
            <div className="bg-zinc-800 p-2 rounded-2xl">
                {/* Flex container */}
                <div className="flex flex-col md:flex-row rounded-t-xl" >
                    {/* Image */}
                    <img src="https://plus.unsplash.com/premium_photo-1688124010168-659d723bf6c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                        className="object-fit rounded-t-xl h-64 md:h-72 md:rounded-l-xl md:rounded-tr-none hover:scale-105 hover:rounded-3xl duration-300 self-center"
                    />
                    {/* Content */}
                    <div className="p-6 md:p-12 md:flex md:flex-col">
                        <h2 className="font-serif text-xl font-medium text-white text-center md:text-left">Enjoy the beauty of Amazon.</h2>
                        <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas consequuntur assumenda ad aliquid voluptas temporibus veniam, consectetur libero natus qui.</p>
                    
                    
                        <div className="flex flex-col items-center just m-6 space-y-6 md:space-x-3 ">
                        <input placeholder="Enter your email" type="text" className="py-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left rounded-m focus:outline-none md:w-full" />
                        <button className="px-4 py-3  text-xs rounded-md text-zinc-1000 bg-green-800 hover:bg-lime-700 hover:text-white duration-500 md:w-full">Subscribe</button>
                    </div>
                    </div>

                   
                </div>
            </div>
        </main>


    )
}