/* eslint-disable @typescript-eslint/no-explicit-any */

const CartCard = ({ product }: any) => {

    return (
        <div className="flex gap-2 py-5 border-b relative">
            <img className="w-20 border drop-shadow-sm h-20 object-cover rounded-lg" src={product?.imageUrl} alt="" />
            <div className="py-1">
                <h1 className="text-md">{product?.title}</h1>
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center gap-1 border rounded-full px-2 w-16">
                        <button>-</button>
                        <p className="px-2">{1}</p>
                        <button>+</button>
                    </div>
                    <p className="text-xs">${product?.price}</p>
                </div>
            </div>
            <button className="absolute top-4 right-0 w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}

export default CartCard