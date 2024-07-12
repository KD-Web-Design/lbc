import { useState } from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'

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

export default function DropdownDesktop() {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
        
    }

    
  return (
    <>
        <nav className='hidden lg:flex bg-slate-50 border-b-2 border-slate-300 h-9'>
            <div className="container mx-auto bg-slate-50 flex justify-center gap-10 ">
                {categories.map((item) => (
                    <ul key={'cc'}>
                        <li key={item.name} href={item.href} className='nav-categories text-sm cursor-pointer hover:font-semibold' onMouseEnter={handleIsOpen} >{item.name}</li>
                    </ul>
                ))}
            </div>

        </nav>


        {/* DROPDOWN CATEGORIES                  */}
        
        <div className={`h-96 w-2/3 mx-auto bg-slate-50 rounded-b-2xl shadow-lg ${isOpen ? "block" : "hidden"}`} onMouseLeave={() => setIsOpen(false)}>
            <div className="flex w-56 h-full bg-slate-200 p-8 rounded-bl-2xl">
                <HomeIcon className='size-6 mx-2' />
                <h1 className='font-semibold'>Immobilier</h1>
            </div>
        </div>

    </>         
  )
}
