import React , {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'

import { logo , sun } from '../assets'
import { navlinks } from '../constants'
import './style.css'

const Icon = ({ styles ,name , imgUrl, isActive ,disabled, handleClick }) => (
  <div className={ `w-[48px] h-[48px] rounded-[10px] ${ isActive && isActive === name && 'bg-[#817f7f36]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {
      !isActive ? (
        <img
          src={imgUrl}
          alt="fund_logo"
          className='w-1/2 h-1/2'
        />
      ) : (
        <img 
          src={imgUrl}
          alt="fund_logo"
          className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}
        />
      )
    }
  </div>
)

const Sidebar = ({darkMode, setDarkMode}) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard')
  
  return (
    

  <div className='flex justify-between items-start flex-col sticky top-5 h-[93vh]'>
    <Link to='/'>
      <Icon styles="w-[65px] h-[65px] ml-[20px] bg-[#2c2f32]" imgUrl={logo} />
    </Link>
  
    <div className={`flex-1 flex flex-col justify-between items-start ${darkMode?'bg-darkmode-solid-color':'bg-lightmode-solid-color'} rounded-[20px] w-auto h-[30vh] p-4 mt-5`}>
      <ul className='group h-[60vh] overflow-scroll  scrollbar-hide m-[10px]  gap-3'>
        {navlinks.map(Link => (
          <div key={Link.name} className={`${!Link.disabled && 'cursor-pointer'}`}>
          <li 
            
            className={`flex rounded-[10px] p-4 ${isActive === Link.name && 'bg-[#3a3a43]'}`}
            onClick={()=>{
              if(!Link.disabled){
                setIsActive(Link.name);
                navigate(`/dashboard${Link.link}`)
              }
            }}
          >
            <img  src={Link.imgUrl} alt={Link.name} className={`w-[24px] h-[24px] object-contain ${isActive === Link.name ? 'grayscale-0':'grayscale'}`}/>
            <p className={`hidden group-hover:inline-block ml-[20px] mr-[10px] font-epilogue font-semibold text-[14px] ${isActive === Link.name ? 'text-[#1dc071]':'text-[#808191]'}`}>{Link.name}</p>
          </li>
        </div>
        ))}
      </ul>

      <div onClick={()=>{
        setDarkMode((prev)=> !prev)
      }}>
        <Icon styles={`${darkMode?'bg-darkmode-bg-color':'bg-lightmode-bg-color'} ml-[15px] shodow-secondary`} imgUrl={sun}  />
      </div>
    
    </div>                
  </div>
  
  
  )
}

export default Sidebar