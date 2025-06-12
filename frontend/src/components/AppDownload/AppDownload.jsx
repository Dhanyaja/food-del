import React from 'react'
import {assets} from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto text-center mt-25 text-4xl flex justify-center flex-col items-center font-medium' id='app-download'>
      <p>For Better Experience Download <br />Tomato App</p>
      <div className='flex gap-10 mt-8'>
        <img src={assets.play_store} alt="" className='hover:scale-102 cursor-pointer' />
        <img src={assets.app_store} alt="" className='hover:scale-102 cursor-pointer' />
      </div>
    </div>
  )
}

export default AppDownload
