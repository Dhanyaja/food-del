import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import { cn } from '../../lib/utils'

const ExploreMenu = ({category, setCategory}) => {

    console.log(category)

  return (
    <div className="explore-menu flex flex-col gap-4" id='explore-menu'>
        <h1 className='font-semibold text-4xl text-[#262626]'>Explore our menu</h1>
        <p className='max-w-[60%] text-[#474444]'>Choose form a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
        <div className='expolre-menu-list flex justify-between items-center gap-8 text-center my-[20px] overflow-x-scroll no-scrollbar'>
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item '>
                        <img
                         className={cn(category === item.menu_name ? "border-2 border-tomato p-2" : "", 'w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-all duration-200' )}
                         src={item.menu_image} alt={item.menu_name} />
                        <p className='mt-[10px] text-[#747474] text-xl cursor-pointer hover:text-[#3f3e3e]'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='my-[10px] h-[2px] bg-[#a7a6a6] border-0' />
    </div>
  )
}

export default ExploreMenu
