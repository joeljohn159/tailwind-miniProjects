import searchIcon from '../assets/search.png'
var GALLERY = [
    {
        url : "https://avatars.mds.yandex.net/i?id=7f9b741c2a232aa139c8d8736594b5474e683f1f-9093405-images-thumbs&n=13",
        title: 'Abstract Painting',
        status:'34 likes - 23 Shares'
    },{
        url : "https://avatars.mds.yandex.net/i?id=b4d6663ff7f6626fa51c18b94f5485ac41e71fd9-11375516-images-thumbs&n=13",
        title: 'California',
        status:'54 likes - 89 Shares'
    },{
        url : "https://avatars.mds.yandex.net/i?id=02091452934c569388d461a550b841355f5c0e22-9123766-images-thumbs&n=13",
        title: 'Bluebirds state',
        status:'340 likes - 223 Shares'
    },{
        url : "https://avatars.mds.yandex.net/i?id=f741a0b9494dea701410eec473ce0e9b1f350380-12434137-images-thumbs&n=13",
        title: 'Baloon Man',
        status:'12 likes - 23 Shares'
    },{
        url : "https://avatars.mds.yandex.net/i?id=4565505d9d9f3348c6b800c9b473755cffaa26f9-12540459-images-thumbs&n=13",
        title: 'Man vs wild',
        status:'54 likes - 22 Shares'
    },{
        url : "https://avatars.mds.yandex.net/i?id=063d593dd48e4231d26fb4f3f219015be0a543ad-12319715-images-thumbs&n=13",
        title: 'gradient wild',
        status:'456 likes - 3455 Shares'
    },{
        url : "https://avatars.mds.yandex.net/i?id=c1583349bad3186ab5bfa5b5dc842c5e5087a95b-12153883-images-thumbs&n=13",
        title: 'Sunsetrise kel',
        status:'234 likes - 45 Shares'
    },{
        url : "https://avatars.mds.yandex.net/i?id=11fa3d7b7505ca8c39cf0d0ee44bda5b392fe5f7-5224693-images-thumbs&n=13",
        title: 'Deep Ocean',
        status:'123 likes - 234 Shares'
    },{
        url : "https://avatars.mds.yandex.net/i?id=72e5ddebc6e25cc0f62ba7eb520dc2dad5956e49-12377907-images-thumbs&n=13",
        title: 'Magic fantasy',
        status:'2 likes - 43 Shares'
    },{
        url : "https://avatars.mds.yandex.net/i?id=14f798dcfbbffb05df2e51480b1cdd71c0ce4dda-8438673-images-thumbs&n=13",
        title: 'Rocket store',
        status:'233 likes - 656 Shares'
    },
]
export default function Project4() {
    return (
        <>
            <div className="flex items-center justify-center bg-cyan-600 min-h-screen">
                <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-20 md:m-10">
                    {/* Menu container */}
                    <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
                        {/* Items */}
                        <div className="group">
                            <a href="#">Home</a>
                            <div className="mx-2 mt-2 duration-400 border-b-2 opacity-0 group-hover:opacity-100 border-black"></div>
                        </div>

                        <div className="group">
                            <a href="#">Status</a>
                            <div className="mx-2 mt-2 duration-400 border-b-2 opacity-0 group-hover:opacity-100 border-black"></div>
                        </div>

                        <div className="group">
                            <a href="#">Library</a>
                            <div className="mx-2 mt-2 duration-400 border-b-2 opacity-0 group-hover:opacity-100 border-black"></div>
                        </div>

                        <div className="group">
                            <a href="#">Books</a>
                            <div className="mx-2 mt-2 duration-400 border-b-2 opacity-0 group-hover:opacity-100 border-black"></div>
                        </div>
                    </div>

                    {/* Search Container */}
                    <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0  ">
                        {/* Input and search icon */}
                        <div className="flex justify-between border-b">
                            <input type="text" className="ml-6 border-none md:w-80 placeholder:font-thin placeholder:text-sm focus:outline-none" placeholder="Search" />
                            <img className='w-4 object-contain' src={searchIcon} alt="" />
                        </div>

                        {/* Upload button */}
                        <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
                            Upload
                        </button>

                    </div>

                    {/* Gallery Container */}
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {/* Images */}
                        {GALLERY.map((item,index)=> 
                            
                            <div key={index} className="relative group hover:cursor-pointer hover:scale-105 duration-300">
                            <img src={item.url} alt="" className='w-72 h-48 object-cover' />
                            <div className="absolute  left-0 right-0 bottom-0 p-2 px-4 text-white bg-black duration-300 opacity-0 group-hover:opacity-100 bg-opacity-40">
                                <div className="flex justify-between w-full">
                                    <div className="font-normal">
                                        <p className="text-sm">{item.title}</p>
                                        <p className="text-xs">{item.status}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg fill="#fff" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                                            <g id="Text-files">
                                                <path d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                                                        C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                                                        c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                                                        h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                                                        C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                                                        c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                                                        c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                                                        M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                                                        c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                                                        c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                                                        h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"/>
                                                                                                                <path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                                                        c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                                                        C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"/>
                                                                                                                <path d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                                                        c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                                                        C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"/>
                                                                                                                <path d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                                        s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                                                        S39.16465,29.4603004,38.6031494,29.4603004z"/>
                                                                                                                <path d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                                                        s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                                                        S29.0059509,37.5872993,28.4444485,37.5872993z"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    </div>



                </div>
            </div>
        </>
    )
}