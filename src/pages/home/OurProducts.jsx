import Deals from "./Deals"
import Products from "./Products"

const OurProducts = () => {
  return (
    <div className="">
        <div className="text-center mt-6">
            <p className=" text-sm text-slate-500">SHOP OUR NEW RELEASES</p>
            <h1 className="text-3xl font-bold">Our Products</h1>
        </div>

        <div className="flex flex-wrap mt-10">
            <div className="border-2 w-fit p-5 m-2">
                <div>
                    <img src="/muscleshark/ms products_page-0003.jpg" alt="img" width={"200px"} />
                </div>
                <div>
                    <div className="text-xs text-slate-700">
                        <span>ENDURANCE & ENERGY </span>
                        <span>UNCATEGORIZED</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-normal mt-2 mb-2">Whey Protein</h2>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center mt-2">
                        <div className="font-bold">$10.2 - $100.73</div>
                        <div className="text-xl hover:text-white hover:bg-amber-600">
                            <a href="#">
                                <i className="fa-solid fa-plus"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        </div>

        <div className="text-center mt-3">
            <button className=" border-2 p-3 text-amber-600 border-amber-600">View All Products <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <Deals />
    </div>
  )
}

export default OurProducts