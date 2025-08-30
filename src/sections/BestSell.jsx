import React from 'react'

const BestSell = () => {
  return (
    <section>
      <div className='bg-black bg-[url("src/imgs/coffee-beans-right.png")] bg-no-repeat bg-contain bg-right h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh]'>
        <h1 className='font-dancing text-red-700 text-[150px] font-bold max-sm:text-[100px]'>Best Sell</h1>
      </div>

      <div className='bg-black bg-[url("src/imgs/coffee-beans-left.png")] bg-no-repeat bg-contain bg-left h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh]'>
        <div className='flex items-center justify-center gap-11'>
          <div>
            <a href=""><img src="src/imgs/americano (1).jpg" alt="" className='h-[190px] rounded-full max-sm:h-[135px]'/></a>
          </div>
          <div className='text-white max-sm:flex-1'>
            <h1 className='text-red-700 text-6xl font-dancing font-bold max-sm:text-5xl max-sm:mb-5 max-sm:mr-1'>Americano</h1>
            <p  className='max-w-[400px] my-[16px] max-sm:hidden'>A smooth, rich coffee made by diluting a shot of espresso with hot water, giving you a bold flavor with a lighter body.</p>
            <a href="" className='bg-red-700 text-[15px] p-[12px] rounded-[2px]'>Order now</a>
          </div>
        </div>
      </div>
     
      <div className='bg-black bg-[url("src/imgs/coffee-beans-right.png")] bg-no-repeat bg-contain bg-right h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh]'>
        <div className='text-white max-sm:flex-1'>
          <h1 className='text-red-700 text-6xl font-dancing font-bold max-sm:text-5xl max-sm:mb-5 max-sm:ml-1'>Cortado</h1>
          <p  className='max-w-[400px] my-[16px] max-sm:hidden'>A Spanish classic: rich espresso gently 'cut' with a splash of steamed milk for perfect harmony.</p>
          <a href="" className='bg-red-700 text-[15px] p-[12px] rounded-[2px] max-sm:ml-1'>Order now</a>
        </div>
        <div>
          <a href=""><img src="src/imgs/Cortado.jpg" alt="" className='h-[190px] rounded-full max-sm:h-[135px]'/></a>
        </div>
      </div>

      <div className='bg-black bg-[url("src/imgs/coffee-beans-left.png")] bg-no-repeat bg-contain bg-left h-[45vh] flex items-center justify-center max-sm:h-[30vh] max-sm:bg-cover max-md:h-[80vh]'>
        <div className='flex items-center justify-center gap-11'>
          <div>
            <a href=""><img src="src/imgs/creamy latte.jpg" alt="" className='h-[190px] rounded-full max-sm:h-[135px]'/></a>
          </div>
          <div className='text-white max-sm:flex-1'>
            <h1 className='text-red-700 text-6xl font-dancing font-bold max-sm:text-5xl max-sm:mb-5 max-sm:mr-1'>creamy latte</h1>
            <p  className='max-w-[400px] my-[16px] max-sm:hidden'>A smooth balance of bold espresso and creamy milk, crafted for pure comfort in every sip.</p>
            <a href="" className='bg-red-700 text-[15px] p-[12px] rounded-[2px]'>Order now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSell