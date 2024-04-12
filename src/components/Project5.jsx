import fb from '../assets/fb.png';
import google from '../assets/google.png';

export default function Project5(){
    return (
        // Global Container
        <div className="flex justify-center items-center min-h-screen bg-rose-100">
            {/* card container */}
            <div className="relative flex flex-col m-6space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-4">
                {/* Left Side */}
                <div className="p-6 md:p-20">
                    <h2 className="font-mono mb-6 text-4xl font-bold">
                        Log In
                    </h2>
                    <div className="max-w-sm mb-12 font-sans font-light text-gray-600">
                        Log in to your accound and upload or download your favorite pictures in any format you prefer.
                    </div>
                    <input type="text" placeholder="Enter your email address" className="w-full p-4 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />

                    {/* Middle Content */}
                    <div className="flex flex-col items-center justify-between space-y-6 mt-6 md:flex-row md:space-y-0">
                        <div className="font-thin text-sm text-cyan-700">Forgot password</div>
                        <button className="w-full md:w-auto md:width-auto flex justify-center items-center p-4 space-x-4 fonts-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150 ">
                            <span>Next</span>
                        </button>
                    </div>

                    {/* Border */}
                    <div className="mt-10 border-b border-gray-300"></div>


                    {/* Bottom cotent */}

                    <p className="py-6 text-sm font-thin text-center text-gray-400">or log in with</p>

                    <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                        <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-40 hover:shadow-lg hover:-transalate-y-0.5 transition duration-150 md:w-1/2">
                            <img src={fb} alt="" className="w-6" />
                            <span className="font-thin">Facebook</span>
                        </button>

                        <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-40 hover:shadow-lg hover:-transalate-y-0.5 transition duration-150 md:w-1/2">
                            <img src={google} alt="" className="w-6" />
                            <span className="font-thin">Google</span>
                        </button>
                    </div>

                </div>




                {/* Right Side */}
                <img src="https://s2.best-wallpaper.net/wallpaper/iphone/1509/Night-water-sea-blue-moon_iphone_640x960.jpg" alt="ocean" className="w-[350px] rounded-r-lg object-cover hidden md:block " />
           
                {/* Close */}
                <div className='md:flex md:items-center md:justify-center md:rounded-full md:bg-gray-300 md:bg-opacity-50 md:w-6 md:h-6 absolute top-5 right-5'>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" className='w-4 h-4   '><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
                </div>
           </div>
        </div>
        
    )
}