import Container from '../../assets/container.png';
import Chart from '../../assets/chart.png';
import Userss from '../../assets/userss.png';
import Usermini from '../../assets/usermini.png';


const Main = () => {
  return (
    <div className="container max-w-[1540px] m-auto relative">
      <div className="main w-[1200px] ">
        <h1 className='text-4xl font-semibold text-[#ffffff] absolute top-[-610px] left-[400px]'>Dashboard</h1>
        <div className="image">
          <div className="chart flex flex-col gap-[10px] absolute top-[-531px] left-[400px]">
          <img src={Chart} alt="chart" className='w-[800px] h-[530px]'/>
          </div>
          <div className="user absolute top-[-620px] left-[1220px] flex flex-col gap-3">
          <img src={Userss} alt="user" className='w-[300px]'/>
          <img src={Usermini} alt="image"  className='w-[300px] h-[207px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;