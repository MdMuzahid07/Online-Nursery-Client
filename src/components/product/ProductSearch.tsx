import ProductCard from "./ProductCard"

const ProductSearch = () => {
    const fakeProduct = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="min-w-screen min-h-screen py-44 px-4 lg:px-0 bg-[#E2E6E0]">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between  mb-12">
                    <h1 className="text-4xl md:text-3xl font-bold text-green-900">Products</h1>
                    <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
                        <div className="relative">
                            <input className="w-[300px] sm:w-[400px] md:w-[600] xl:w-[700px] py-1 px-4 border border-green-900 rounded-full focus:outline-none" type="text" placeholder="What are you looking for?" />
                            <button className=" absolute top-1 right-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                        <select className="focus:outline-none border border-green-900 rounded-full py-1.5 px-3" name="" id="">
                            <option value="" disabled>Filter options</option>
                            <option value="">Sort by name</option>
                            <option value="">Price low to high</option>
                            <option value="">Price high to low</option>
                        </select>
                    </div>
                </div>
                <div className="w-full grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-5 ">
                    {
                        fakeProduct?.map(() => <ProductCard />)
                    }
                </div>
                <div className="w-full flex justify-end mt-8">
                    <div className="flex items-center gap-4">
                        {
                            fakeProduct?.map((num) => <button className="w-7 h-7 flex justify-center items-center rounded-full border border-green-900 hover:bg-green-900 hover:text-white">{num}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSearch