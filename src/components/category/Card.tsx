
const Card = () => {
    return (
        <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-101 w-full min-h-40 rounded-lg bg-white shadow hover:shadow-md p-1">
            <div className="flex justify-center items-center">
                <div className="w-28 h-28 rounded-full bg-red-500">
                    <img className="object-cover overflow-hidden" src="../../../public/flora-essence.png" alt="" />
                </div>
            </div>
            <h1 className="text-xl font-bold mt-1">Name</h1>
        </div>
    )
}

export default Card