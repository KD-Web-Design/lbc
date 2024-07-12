import { useState } from 'react'
import DropdownDesktop from './DropdownDesktop'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { BellIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/16/solid'


const categories = [
    {name: 'Immobilier', href: '#'},
    {name: 'Véhicules', href: '#'},
    {name: 'Locations de vacances', href: '#'},
    {name: 'Emploi', href: '#'},
    {name: 'Mode', href: '#'},
    {name: 'Maison & Jardin', href: '#'},
    {name: 'Famille', href: '#'},
    {name: 'Électronique', href: '#'},
    {name: 'Loisirs', href: '#'},
    {name: 'Autres', href: '#'},
]




export default function Navigation() {
    
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
        
    }

  return (

    

    // MOBILE 
    <>
           
          <nav className='w-full lg:hidden fixed'>
              <div className='w-full px-3 pt-3 bg-slate-50 flex justify-center relative'>
                  <Bars3Icon className='size-10 absolute top-4 left-3 cursor-pointer' onClick={handleIsOpen}  />
                  <img src="src\assets\Leboncoin_logo_2021.png" alt="logo Leboncoin" className='w-1/2 max-w-48' />
              </div>

              <div className='w-full p-3 bg-slate-50 relative flex items-center border-b-2'>
                  <MagnifyingGlassIcon className='size-5 absolute ml-3 pointer-events-none' />
                  <input type="text" placeholder='Rechercher sur leboncoin' className='w-full h-10 rounded-2xl bg-slate-200 focus:outline-black placeholder:text-slate-600 pl-10' />
              </div>
          </nav>
          
          {/* DESKTOP    */}
          <nav className='w-full hidden lg:flex justify-center bg-slate-50'>
            <div className="p-4 bg-slate-50" >
                <img src="src\assets\Leboncoin_logo_2021.png" alt="logo Leboncoin" className='max-w-44' />
            </div>
            <div className="p-2 bg-slate-50 flex relative items-center">
                <PlusCircleIcon className='size-5 text-slate-50 absolute ml-3 pointer-events-none'/>
                <button className='font-semibold text-slate-50 bg-[#EC5A13] py-2 rounded-2xl pl-10 pr-4 hover:bg-[#fd9d6c]'>Déposer une annonce</button>
            </div>

            <div className="p-2 bg-slate-50 relative flex items-center min-w-[17rem]">
                <input type="text" placeholder='Rechercher sur leboncoin' className='w-full h-10 rounded-2xl bg-slate-200 focus:outline-black placeholder:text-slate-600 pl-3' />
                <button className='bg-[#EC5A13] absolute right-4 p-2 rounded-xl hover:bg-[#fd9d6c]'>
                    <MagnifyingGlassIcon className='size-4 text-slate-50 pointer-events-none' />
                </button>        
            </div>

            <div className="p-2 bg-slate-50 flex justify-between w-80">
                <a href="#" className='nav-icons flex flex-col items-center p-1'>
                    <BellIcon className='size-7'/>
                    <span className='text-slate-900 text-xs'>Mes recherches</span>
                </a>
                <a href="#" className='nav-icons flex flex-col items-center p-1'>
                    <HeartIcon className='size-7'/>
                    <span className='text-slate-900 text-xs'>Favoris</span>
                </a>  
                <a href="#" className='nav-icons flex flex-col items-center p-1'>
                    <ChatBubbleBottomCenterTextIcon className='size-7'/>
                    <span className='text-slate-900 text-xs'>Messages</span>
                </a>  
                <a href="#" className='nav-icons flex flex-col items-center p-1'>
                    <UserIcon className='size-7'/>
                    <span className='text-slate-900 text-xs'>Se connecter</span>
                </a>      
            </div>                
          </nav>
          <DropdownDesktop />


          {/* OVERLAY MOBILE  */}

          <section className={`flex fixed w-full sm:w-2/3 -left-full bg-slate-50 duration-500 z-10 items-center flex-col py-3 overflow-y-scroll h-screen lg:hidden ${isOpen ? "left-0" : ""}`}>
            <img src="src\assets\Leboncoin_logo_2021.png" alt="logo lbc" className='object-cover w-44'  />
            <div className='p-2 absolute top-3 right-3 hover:bg-slate-300 rounded-2xl cursor-pointer'>
                <XMarkIcon className='size-6  text-slate-600' onClick={() => setIsOpen(false)}/>
            </div>
            <div className='w-[95%] border-t-2 border-slate-300 mt-3'>
                <a href='#' className='flex items-center my-2 gap-2 hover:bg-[#faefe9] p-2 rounded-md'>
                    <PlusCircleIcon className='size-5 text-slate-900 ml-3 pointer-events-none'/>
                    <span className='font-semibold'>Déposer une annonce</span>
                </a>
                <a href='#' className='flex items-center gap-2 hover:bg-[#faefe9] p-2 my-1 rounded-md'>
                    <MagnifyingGlassIcon className='size-5 text-slate-900 ml-3 pointer-events-none'/>
                    <span className='font-semibold'>Rechercher</span>
                </a>
            </div>
            <div className='w-[95%] border-t-2 border-slate-300 mt-3'>
                <a href='#' className='flex items-center my-2 gap-2 hover:bg-[#faefe9] p-2 rounded-md'>
                    <ChatBubbleBottomCenterTextIcon className='size-5 text-slate-900 ml-3 pointer-events-none'/>
                    <span className='font-semibold'>Messages</span>
                </a>
                <a href='#' className='flex items-center gap-2 hover:bg-[#faefe9] p-2 my-1 rounded-md'>
                    <HeartIcon className='size-5 text-slate-900 ml-3 pointer-events-none'/>
                    <span className='font-semibold'>Favoris</span>
                </a>
                <a href='#' className='flex items-center gap-2 hover:bg-[#faefe9] p-2 my-1 rounded-md'>
                    <BellIcon className='size-5 text-slate-900 ml-3 pointer-events-none'/>
                    <span className='font-semibold'>Recherches sauvegardées</span>
                </a>
            </div>
            <div className="w-[95%] flex flex-col border-t-2 border-slate-300 mt-2">
                <h5 className='text-slate-400 mt-3 text-xs p-2'>Catégories</h5>
                {categories.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className=
                        'flex items-center gap-2 hover:bg-[#faefe9] p-2 my-1 rounded-md text-sm'
                      
                      >
                        {item.name}
                      </a>
                ))}
                <a href='#' className='flex items-center gap-2 hover:bg-[#faefe9] p-2 mt-3 rounded-md'>
                    <span className='font-semibold'>Se connecter</span>
                </a>
            </div>
            <div className="w-[95%] flex flex-col border-t-2 border-slate-300 mt-2">
                <a href='#' className='flex items-center justify-between gap-2 hover:bg-[#faefe9] p-2 my-1 rounded-md'>
                    <span className='font-semibold'>Informations pratiques</span>
                    <ChevronRightIcon className='size-7 text-slate-400 ml-3 pointer-events-none'/>
                </a>
                <a href='#' className='flex items-center justify-between gap-2 hover:bg-[#faefe9] p-2 my-1 rounded-md'>
                    <span className='font-semibold'>leboncoin</span>
                    <ChevronRightIcon className='size-7 text-slate-400 ml-3 pointer-events-none'/>
                </a>
            </div>
            
          </section>

    </>
  )
}