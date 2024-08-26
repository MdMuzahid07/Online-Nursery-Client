import CartPageCard from "../../cart/CartPageCard"

const CheckoutCart = () => {
    return (
        <div className="bg-[#E2E6E0] w-full h-full">
            <div className="h-56 w-full">
                <img className="h-full w-full object-cover" src="../../../public/slider-3.jpg" alt="" />
            </div>
            <div className="max-w-7xl mx-auto py-32 px-4 lg:px-0">
                <div className="grid lg:grid-cols-8 gap-7 mt-14">
                    <div className="lg:col-span-5">
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-green-900">My Cart</h1>
                        <div className=" border-t border-green-900 mt-7">
                            <div className="overflow-y-scroll h-[400px] mt-7">
                                {
                                    [0, 1, 2, 3, 4, 5]?.map(() => <CartPageCard />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <h1 className="text-xl sm:text-2xl md:text-4xl text-green-900">Order Summery</h1>
                        <div className="border-t border-green-900 mt-7">
                            <div className="bg-white p-4 mt-7 rounded-lg">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum magnam blanditiis hic esse facere quia maiores iure unde eveniet sunt fuga non, debitis quasi minus nostrum eius, assumenda earum. Tempora, soluta iusto velit neque sed minus illo aspernatur. Inventore earum rem accusantium obcaecati maxime id ad sapiente eius, nisi deleniti at incidunt repudiandae quos quae dicta ut voluptatibus sed adipisci tenetur, nemo cupiditate. Soluta animi at vitae ab eveniet, ipsum eum odio, tempora impedit reprehenderit adipisci officiis quis quaerat assumenda ut. Quidem dignissimos, libero molestiae suscipit, ipsum enim et cumque nam voluptatibus, quos incidunt expedita repellendus quae excepturi eaque hic!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCart