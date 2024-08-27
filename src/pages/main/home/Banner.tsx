
const Banner = () => {
    return (
        <section className=" bg-[#E2E6E0]">
            <div className="max-w-7xl mx-auto py-32 px-4 lg:px-0">
                <div className="flex flex-wrap md:flex-nowrap item-center justify-between gap-4">
                    <div className="w-full h-52 rounded-lg overflow-none">
                        <img className="w-full h-full  rounded-lg object-cover" src="../../../../public/slider-3.jpg" alt="" />
                    </div>
                    <div className="w-full h-52 rounded-lg overflow-none">
                        <img className="w-full h-full  rounded-lg object-cover" src="../../../../public/slider-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner