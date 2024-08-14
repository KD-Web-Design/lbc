import { XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import {CurrencyEuroIcon} from "@heroicons/react/24/outline"

export default function FilterOverlay() {
  return (
    <section className="flex fixed top-0 right-0 w-full sm:w-[500px] bg-slate-50 duration-500 z-50 items-center flex-col py-3 overflow-y-scroll h-screen">
        
        <div className="flex justify-between items-center w-[90%]">
            <span className='font-semibold'>Tous les filtres</span>
            <div className='p-2 hover:bg-slate-300 rounded-2xl cursor-pointer'>
                <XMarkIcon className='size-6  text-slate-600'/>
            </div>
        </div>

        <div className='w-[90%] border-t-2 border-slate-300 mt-3 pt-3'>
            <span>Catégorie</span>
            <div className="flex justify-between items-center pt-3 cursor-pointer">
                <a href='#' className='font-semibold text-sm rounded-md'>
                    Voitures
                </a>
                <ChevronRightIcon className="size-5" />
            </div>
        </div>

        <div className='w-[90%] border-t-2 border-slate-300 mt-3 pt-3'>
            <div className="flex items-center gap-2">
                <CurrencyEuroIcon className="size-6 bg-slate-300 text-slate-900 rounded-full" />
                <span>Prix</span>
            </div>
            <div className="flex pt-3 gap-4">
                <div className="flex items-center border border-gray-300 rounded-2xl flex-grow">
                    <input
                        type="number"
                        placeholder="Minimum"
                        className="px-4 py-2 text-gray-500 focus:outline-none w-full rounded-2xl"
                    />
                    <span className="px-3 py-2 text-gray-500 border-l border-gray-300">
                        €
                    </span>
                </div>
                <div className="flex items-center border border-gray-300 rounded-2xl flex-grow">
                    <input
                        type="number"
                        placeholder="Maximum"
                        className="px-4 py-2 text-gray-500 focus:outline-none w-full rounded-2xl"
                    />
                    <span className="px-3 py-2 text-gray-500 border-l border-gray-300">
                        €
                    </span>
                </div>
            </div>
        </div>
        
        
        </section>
  )
}
