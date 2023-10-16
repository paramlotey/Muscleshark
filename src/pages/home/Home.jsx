import OurProducts from "./OurProducts";
import OverviewProducts from "./OverviewProducts";

const Home = () => {
  return (
    
      
   <>
        <div className="py-32 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center bg-cover h-[500px]">
          <div className=" mx-12">
            <h2 className="text-white text-lg bg-[#c4aa37] w-fit px-4 py-2 md:text-sm">
              Dive into savings cyber monday exclusive
            </h2>
            <h1 className="text-white font-extrabold text-6xl">+
              Elevate Your Immunity, Ignite Your Energy!
            </h1>
            <p className="text-white text-md font-bold mt-4">
              24g of pure protein for enhanced lean muscle.
            </p>
            <button className="bg-yellow-500 py-2 px-4 rounded mt-2 text-white capitalize">
              shop now
            </button>
      
      
      </div>
      <OverviewProducts/>
      <OurProducts />
    </div>
   </>
  );
};

export default Home;
