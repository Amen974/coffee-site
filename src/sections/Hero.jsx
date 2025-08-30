const Hero = () => {
  return (
    <section className="bg-[url('src/imgs/coffee-beans-1.jpg')] h-[90vh] bg-no-repeat bg-cover bg-center flex justify-center items-center max-md:h-[110vh]">
      <div className="max-w-162 flex flex-col items-center max-md:w-100">
        <h1 className="text-red-600 font-dancing font-bold text-7xl mb-2 max-md:text-5xl max-md:mb-0">A sip of joy</h1>
        <p className="text-2xl text-white mb-4 max-md:text-[19px] max-md:mb-0">A unique world of flavers</p>
        <p className="text-white text-[18px] text-center mb-6 max-md:text-[15px] max-md:mb-2">Discover freshly roasted coffee crafted with passion,
          sourced from the finest farms around the world. Whether you crave a bold espresso or a smooth,
          creamy latte, every cup is brewed to awaken your senses and brighten your day.
        </p>
        <div className="flex gap-4 justify-center items-center mt-1 mb-7  max-md:mb-2">
          <a href="" className="text-white bg-red-700 text-[15px] px-5 py-2 rounded-md shadow-md hover:bg-red-800 transition max-md:text-[13px]">Eplore more</a>
          <a href="" className="bg-white text-[15px] px-5 py-2 rounded-md shadow-md hover:bg-gray-200 transition max-md:text-[13px]">Learn more</a>
        </div>
        
        <div className="flex gap-8 text-green-700 px-6 py-4">
          <div className="text-center">
          <h3 className="text-2xl font-bold text-brown-800 max-md:text-[20px]">50k+</h3>
          <p className="text-sm text-gray-400">Happy Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brown-800 ">100%</h3>
            <p className="text-sm text-gray-400">Organic Beans</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brown-800">10+</h3>
            <p className="text-sm text-gray-400">Years of Excellence</p>
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default Hero