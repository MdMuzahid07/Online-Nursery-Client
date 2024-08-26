
const Preloader = () => {
    return (
        <>
            <img className="relative max-h-screen w-full object-cover" src="../../../public/slider-3.jpg" alt="" />
            <div className="bg-[#E2E6E0] min-h-screen min-w-screen flex justify-center items-center absolute top-0 left-0 bg-opacity-75 w-full h-full">
                <div className="flex justify-center items-center h-screen">
                    <div className="relative">
                        <img className="w-24 h-24 absolute left-2 top-2" src="../../../public/flora-essence.png" alt="" />
                        <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-b-4 border-green-900">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Preloader