import { useState } from 'react';
import Setting from '../../assets/Setting.svg';
import Image from '../../assets/Image.svg';
import Home from '../../assets/Home.svg';
import Filter from '../../assets/Filter.svg';
import Edit from '../../assets/Edit.svg';
import Document from '../../assets/Document.svg';
import Chat from '../../assets/Chat.svg';
import Category from '../../assets/Category.svg';
import Bag from '../../assets/Bag.svg';
import User from '../../assets/User.svg';
import Moon from '../../assets/moon.svg';
import LogOut from '../../assets/Logout.svg';
import On from '../../assets/on.svg';
import One from '../../assets/one.svg';
import { MdArrowForwardIos } from "react-icons/md";

const Cummo = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="container  max-w-[1540px] m-auto relative h-screen bg-[#485967]">
      <div className="slider">
        <div className={` w-[350px]  h-[650px] rounded-r-[10px] absolute top-21 left-[-350px] bg-[#1E252B] p-[20px] transform transition-transform duration-500 ${open ? "-translate-x-0" : "translate-x-full"}`}>
          <div className="chqish w-30px h-[70px] bg-[#1E252B] absolute  left-[332px] top-[290px] rounded-3xl z-[99]">
            <MdArrowForwardIos className='text-[39px] mt-[15px] ml-[6px] text-[#ffffff]' onClick={() => setOpen(!open)} />
          </div>
          <div className="icons w-[298px] h-[502px] leading-[20px] mt-[0px] flex flex-col gap-y-4">
            <div className="icon flex items-center gap-[12px] pl-4 ">
              <img src={Home} alt="home" />
              <h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Dashboard</h4>
            </div>
            <div className="icon flex items-center gap-[12px] w-[268px] h-[51.75px] bg-[#667A8A] rounded-[5px] pl-4">
              <img src={Edit} alt="edit" className='' />
              <h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Posts</h4>
            </div>
            <div className="icon flex items-center gap-[12px] pl-4">
              <img src={Image} alt="media" className='' />
              <h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Media</h4>
            </div>
            <div className="icon flex items-center gap-[12px] pl-4">
              <img src={Document} alt="pages" className='' />
              <h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Pages</h4>
            </div>
            <div className="icon flex items-center gap-[12px] pl-4">
              <img src={Chat} alt="chat" className='' />
              <h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Comments</h4> <img src={One} alt="one" className='ml-[70px]' />
            </div>
            <div className="icon flex items-center gap-[12px] pl-4">
              <img src={Category} alt="category" className='' />
              <h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Appearance</h4>
            </div>
            <div className="icon flex items-center gap-[12px] pl-4">
              <img src={Bag} alt="bag" className='' />
              <h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Plugins</h4>
            </div>
            <div className="icon flex items-center gap-[12px] pl-4">
              <img src={User} alt="user" className='' />
              <h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Users</h4>
            </div>
            <div className="icon flex items-center gap-[12px] pl-4">
              <img src={Setting} alt="setting" className='' />
              <h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Settings</h4>
            </div>
            <div className="icon flex items-center gap-[12px] pl-4">
              <img src={Filter} alt="filter" className='' />
              <h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Tools</h4>
            </div>
          </div>
          <hr className='w-[290px] relative top-2 text-[grey]' />
          <div className="bottom flex flex-col gap-4 mt-[20px]">
            <div className="icon flex items-center gap-[12px] pl-4"><img src={Moon} alt="ligth mode" className='w-[25px]' /><h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Light Mode</h4> <img src={On} alt="on" className='ml-[40px]' /></div>
            <div className="icon flex items-center gap-[12px] pl-4 w-[268px] h-[51.75px] bg-[#667A8A] rounded-[5px]"><img src={LogOut} alt="Logout" className='w-[25px]' /><h4 className='text-[17.25px] text-[#EFF2F4] font-normal'>Logout</h4></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cummo