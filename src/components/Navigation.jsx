import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { BellIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Armchair, Briefcase, CarFront, CircleHelpIcon, Dumbbell, House, Shirt, Smartphone, TentTree, Users } from 'lucide-react'


const categories = [
    {id: 1, name: 'Immobilier', href: '#', icon: House},
    {id: 2, name: 'Véhicules', href: '#', icon: CarFront},
    {id: 3, name: 'Locations de vacances', href: '#', icon: TentTree},
    {id: 4, name: 'Emploi', href: '#', icon: Briefcase},
    {id: 5, name: 'Mode', href: '#', icon: Shirt},
    {id: 6, name: 'Maison & Jardin', href: '#', icon: Armchair},
    {id: 7, name: 'Famille', href: '#', icon: Users},
    {id: 8, name: 'Électronique', href: '#', icon: Smartphone},
    {id: 9, name: 'Loisirs', href: '#', icon: Dumbbell},
    {id: 10, name: 'Autres', href: '#', icon: CircleHelpIcon},
]





export default function Navigation() {

    // GERER GROWING DE L'INPUT 

    const [isExpanded, setIsExpanded] = useState(false);

    const handleFocus = () => {
        setIsExpanded(true);
    }

    const handleBlur = () => {
        setIsExpanded(false)
    }
     


    // GERER DROPDOWN 
    const [isOpen, setIsOpen] = useState(false);
    const [dropIsOpen, setDropIsOpen] = useState(false);
    const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
    
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = (id) => {
        setHoveredCategoryId(id);
        setDropIsOpen(true);
    };

    const handleMouseLeave = () => {
        setDropIsOpen(false);
        setHoveredCategoryId(null);
    };

    const hoveredCategory = categories.find((item) => item.id === hoveredCategoryId);




  return (

    

    // MOBILE 
    <>
           
          <nav className='w-full lg:hidden fixed top-0 z-10'>
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
          <nav className='w-full  hidden lg:flex justify-center bg-slate-50'>
            <div className="p-4 bg-slate-50" >
                <img src="src\assets\Leboncoin_logo_2021.png" alt="logo Leboncoin" className='max-w-44' />
            </div>
            <div className='w-[32rem] flex justify-end'>
                    <div className={` bg-slate-50 flex relative items-center transition-all duration-500 ease-in-out ${isExpanded ? 'w-0 opacity-0' : ' w-full opacity-100' }`}>
                        <PlusCircleIcon className='size-5 text-slate-50 absolute ml-3 pointer-events-none'/>
                        <button className='font-semibold text-slate-50 bg-[#EC5A13] py-2 rounded-2xl pl-10 pr-4 hover:bg-[#fd9d6c] whitespace-nowrap'>Déposer une annonce</button>
                    </div>
                <div className={`p-2 bg-slate-50 relative flex items-center min-w-[17rem] transition-all duration-500 ease-in-out`} style={{ width: isExpanded ? '100%' : '17rem' }}>
                    <input type="text" 
                    placeholder='Rechercher sur leboncoin' 
                    className='w-full h-10 rounded-2xl bg-slate-200 focus:outline-black placeholder:text-slate-600 pl-3' 
                    onFocus={handleFocus} 
                    onBlur={handleBlur} />
                    <button className='bg-[#EC5A13] absolute right-4 p-2 rounded-xl hover:bg-[#fd9d6c]'>
                        <MagnifyingGlassIcon className='size-4 text-slate-50 pointer-events-none' />
                    </button>
                </div>
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
          

                {/* DROPDOWN  */}
      
              <nav className='hidden lg:flex bg-slate-50 border-b-2 border-slate-300 h-9'>
                  <div className="container mx-auto bg-slate-50 flex justify-center gap-10 ">
                      <ul className='flex gap-10'>
                          {categories.map((item) => (
                              <li href={item.href} key={item.id} className='nav-categories text-sm cursor-pointer hover:font-semibold' onMouseEnter={() => handleMouseEnter(item.id)} >{item.name}</li>
                          ))}
                      </ul>
                  </div>
      
              </nav>
      
      
              {/* DROPDOWN CATEGORIES                  */}
      
              {hoveredCategory && (
              
              <div className={`h-96 w-[95%] xl:w-2/3 mx-auto bg-slate-50 rounded-b-2xl shadow-lg ${dropIsOpen ? "block" : "hidden"}`} onMouseLeave={handleMouseLeave}>
                  <div className="flex w-56 h-full bg-slate-200 p-8 rounded-bl-2xl">
                      <div className='flex items-center h-10'>
                            <div className='px-3'>{<hoveredCategory.icon />}</div>
                            <h1 className='font-semibold'>{hoveredCategory.name}</h1>
                      </div>
                  </div>
              </div>
              )}

          {/* OVERLAY MOBILE  */}

        <div className="w-full h-screen bg-transparent z-50" onClick={() => setIsOpen(false)}>
          <section className={`flex fixed top-0 w-full sm:w-2/3 -left-full bg-slate-50 duration-500 z-10 items-center flex-col py-3 overflow-y-scroll h-screen lg:hidden ${isOpen ? "left-0" : ""}` } onClick={e => e.stopPropagation()}>
            <img src="src\assets\Leboncoin_logo_2021.png" alt="logo lbc" className='object-cover w-44' />
            <div className='p-2 absolute top-3 right-3 hover:bg-slate-300 rounded-2xl cursor-pointer'>
                <XMarkIcon className='size-6  text-slate-600' onClick={handleIsOpen}/>
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
                      key={item.id}
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
        </div>


    </>
  )
}
