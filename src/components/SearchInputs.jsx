import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid"
import { MapPin } from "lucide-react"

export default function SearchInputs() {
  return (
    <div className="w-full flex gap-2 justify-center mt-40 px-2 lg:mt-8 my-8 lg:w-[1000px] mx-auto">
        <div className="flex grow">
            <button name="localisation" id="localisation" className="flex items-center px-4 py-1 gap-1 w-full font-medium rounded-2xl  hover:border-black ring-1 ring-slate-400 relative">
                <MapPin  className="size-6 text-slate-500"/>
                Paris (75)
                <ChevronDownIcon className="size-6 absolute right-4 text-slate-500" />
            </button>
        </div>
        <div className="flex grow">
            <button className="flex items-center justify-between px-4 py-2 w-full rounded-2xl  ring-slate-400 hover:border-black ring-1">Prix
                <ChevronRightIcon className="size-6 text-slate-500" />
            </button>
        </div>
        <div className="hidden lg:flex grow">
            <button className="flex items-center justify-between px-4 py-2 w-full rounded-2xl  ring-slate-400 hover:border-black ring-1">Marque
                <ChevronRightIcon className="size-6 text-slate-500" />
            </button>
        </div>
        
        
        <div className="flex">
            <button className="flex items-center px-4 gap-1 w-full rounded-2xl font-semibold ring-slate-400 hover:border-black ring-1">
                <AdjustmentsHorizontalIcon className="size-6 text-slate-500" />
                <span className="hidden sm:block font-normal">Filtres</span>
            </button>
        </div>
    </div>
  )
}
