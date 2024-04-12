import headPhone from '../assets/headphone.jpg'
const Project3 = () => {
    return (
        <>
            {/* Global Container */}

            <div className="flex items-center justify-center min-h-screen bg-slate-100">
                

                {/* Card Container */}
                <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 p-16">
                    {/* image div */}

                    <div>
                        <img src={headPhone} alt="headPhone" className='mx-auto w-80 duration-500 hover:scale-105 hover:rounded-xl' />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col space-y-6">
                        {/* Label & desc */}
                        <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                            <div>
                                <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">Free Shipping</div>
                            </div>

                            <div className="max-w-sm text-2xl font-medium">
                                Bosch Gaming Headphone 4.7 KSK
                            </div>

                            {/* Price */}
                            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                                <p className="line-through">$789.90</p>
                                <p className="text-4xl font-bold">$389.90</p>
                                <p className="text-sm font-light text-gray-400">The offer is only valid till June 6th.</p>
                            </div>
                        </div>

                    {/* Button Group */}
                    <div className="group">
                        <button className=" w-full transition-all duration-100 bg-blue-600 text-white border-b-8 border-b-blue-600 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-600 group-hover:border-t-blue-600 group-hover:shadoe-lg">
                                <div className="px-8 py-4 bg-blue-500 rounded-lg">Add to cart</div>
                        </button>
                    </div>

                    {/* Stock */}

                    <div className="flex items-center space-x-3 group">
                            <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                            <div className="text-sm">32+ stocks available.</div>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Project3;