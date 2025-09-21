import React from 'react'
import Avatar from '../../assets/Avatar.svg'
import { AiTwotoneMessage } from "react-icons/ai";
import Logo from '../../assets/Logo.svg';


const Header = () => {
  return (
    <div className="container  max-w-[1540px] m-auto h-[0px]">
      <div className="heeder w-full h-[77px]  relative top-[-730px] bg-[#1E252B]">
        <header>
          <div className="top flex items-center gap-[17.25px] p-[20px]">
            <img src={Logo} alt="cummo" />
            <h3 className='text-[#FFFFFF] text-[24px]'>Cummo</h3>
          </div>
          <div className="left flex items-center absolute left-[1340px] gap-5 top-[10px]">
            <AiTwotoneMessage className='text-4xl'/>
            <img src={Avatar} alt="man's photo" />
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header