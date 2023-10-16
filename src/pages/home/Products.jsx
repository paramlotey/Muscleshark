
const Products = () => {
  return (
    <div className="card ">
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
                <div><i className="fa-solid fa-plus"></i></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Products