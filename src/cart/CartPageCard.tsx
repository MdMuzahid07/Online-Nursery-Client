import { useState } from "react";

const CartPageCard = () => {
    // return (
    // <div className="flex gap-3 relative bg-slate-100 border hover:border-green-900 p-4 rounded-lg mb-4">
    //     <img className="w-28 border drop-shadow-sm h-28 object-cover rounded-lg" src="../../public/slider-2.jpg" alt="" />
    //     <div className="py-1">
    //         <h1 className="text-md">Product Name</h1>
    //         <div className="flex items-center gap-2">
    //             <div className="flex items-center justify-center gap-1 border rounded-full px-2 w-16">
    //                 <button>-</button>
    //                 <p className="px-2">{1}</p>
    //                 <button>+</button>
    //             </div>
    //             <p className="text-xs">$15.00</p>
    //         </div>
    //     </div>
    //     <button className="absolute top-4 right-0 w-10 h-10">
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
    //             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    //         </svg>
    //     </button>
    // </div>
    const [count, setCount] = useState(1);

    const handleCounter = (value) => {
        if (value === "increment") {
            setCount(count + 1);
        } else if (value === "decrement" && count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="border bg-white rounded-lg overflow-hidden w-full hover:border-green-900 ease-in-out duration-300 mb-4 grid grid-cols-9 gap-2">
            <div className="col-span-3 w-full h-full">
                <img src="../../public/slider-3.jpg" alt="" />
            </div>
            <div className="col-span-6 relative pl-0 p-4">

                <h1 className="text-md font-semibold">Name: The cap cut, lorem ipsum</h1>
                <p className="text-xs text-slate-500">Category: Red</p>

                <div className="absolute left-0 bottom-2 flex items-center justify-between w-full">

                    <div className="flex items-center gap-3">
                        <p className="text-md">$49</p>
                        <div className="border px-2 h-5 flex items-center gap-1 rounded-full">
                            <button className="text-md w-4 h-4 flex justify-center items-center" onClick={() => handleCounter("decrement")}>-</button>
                            <p className="text-xs">{count}</p>
                            <button className="text-md w-4 h-4 flex justify-center items-center" onClick={() => handleCounter("increment")}>+</button>
                        </div>
                    </div>

                    <button className="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={14} height={14} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 7l16 0"></path>
                            <path d="M10 11l0 6"></path>
                            <path d="M14 11l0 6"></path>
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
};

export default CartPageCard;
