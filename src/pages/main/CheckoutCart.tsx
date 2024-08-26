import CartPageCard from "../../cart/CartPageCard"

const CheckoutCart = () => {
    return (
        <div className="bg-[#E2E6E0] w-full h-full">
            <div className="h-56 w-full">
                <img className="h-full w-full object-cover" src="../../../public/slider-3.jpg" alt="" />
            </div>
            <div className="max-w-7xl mx-auto py-32 px-4 lg:px-0">
                <h1 className="text xl md:text-2xl lg:text-4xl font-bold text-green-900">My Cart</h1>
                <div className="grid lg:grid-cols-8 gap-7 mt-14">
                    <div className="lg:col-span-5 bg-white rounded-lg px-4 py-5 border">
                        <div className=" overflow-x-auto overflow-y-auto max-h-[700px]">
                            {
                                [0, 1, 2, 3, 4, 5]?.map(() => <CartPageCard />)
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, architecto laborum dolorum aliquam consequuntur autem id ex iste est! Ipsum, velit voluptatem. Nesciunt distinctio cupiditate, tempora ex quisquam error nobis beatae accusamus vitae assumenda consectetur quidem tempore iure perspiciatis soluta enim, saepe tenetur aliquid qui, similique quasi magnam nisi! Recusandae est unde odit labore doloribus expedita, sunt eos inventore perferendis fugit impedit hic delectus quod vitae repellat autem dolor architecto veritatis eius asperiores beatae quos itaque? Ab reiciendis, quod asperiores natus molestiae reprehenderit ducimus unde maxime consequatur nobis magni provident sunt deleniti nesciunt quo tempore corrupti numquam, expedita recusandae iure maiores esse eaque repellendus dolorum? Voluptatem odio accusantium minima magnam, mollitia sed veniam accusamus et, officiis voluptate quasi? Sint, cupiditate repudiandae iusto blanditiis soluta, labore cum sunt accusantium, reprehenderit tempore qui natus beatae doloribus doloremque fugit sapiente eum enim. Exercitationem, debitis, atque maiores velit ullam commodi quae harum ad esse a sint voluptatibus animi nihil magni ipsam repellat maxime nostrum corrupti rerum unde cupiditate. Eligendi nam fugiat voluptates pariatur vitae corrupti minus porro assumenda, unde incidunt veritatis eaque, maiores laudantium rem ea reiciendis exercitationem? Doloribus expedita nisi cumque, doloremque reiciendis numquam cum vero quaerat assumenda voluptates dolorem laudantium ea. Dolore!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCart