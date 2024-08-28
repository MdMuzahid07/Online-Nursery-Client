/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";

const Card = ({ category }: any) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    };

    return (
        <div onClick={() => handleClick()} className="transition bg-white ease-in-out delay-100 hover:scale-110 w-full max-h-40 border hover:border-green-900 rounded-lg cursor-pointer p-3">
            <div className="flex justify-center items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-white">
                    <img className="object-cover overflow-hidden" src={category?.image} alt="" />
                </div>
            </div>
            <h1 className="text-xs font-bold mt-2">{category?.name}</h1>
        </div>
    )
};

export default Card;