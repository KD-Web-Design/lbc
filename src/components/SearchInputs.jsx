import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid"
import { MapPin } from "lucide-react"

export default function SearchInputs() {
  return (
    <div className="w-full flex gap-2 justify-center px-2 mt-40 lg:hidden">
        <div className="flex grow">
            <button name="localisation" id="localisation" className="flex items-center px-4 py-1 gap-1 w-full rounded-2xl font-medium text-lg  hover:border-black border-2 border-slate-400 relative">
                <MapPin  className="size-6 text-slate-500"/>
                Loiret (45)
                <ChevronDownIcon className="size-6 absolute right-4 text-slate-500" />
            </button>
        </div>
        <div className="flex grow">
            <button className="flex items-center justify-between px-4 py-3 w-full rounded-2xl text-lg border-slate-400 hover:border-black border-2">Prix
                <ChevronRightIcon className="size-6 text-slate-500" />
            </button>
        </div>
        <div className="hidden sm:flex">
        <button className="flex items-center justify-between px-4 py-3 w-full rounded-2xl text-lg border-slate-400 hover:border-black border-2">Marque
                <ChevronRightIcon className="size-6 text-slate-500" />
            </button>
        </div>
        <div className="hidden sm:flex">
        <button className="flex items-center justify-between px-4 py-3 w-full rounded-2xl text-lg border-slate-400 hover:border-black border-2">Année
                <ChevronRightIcon className="size-6 text-slate-500" />
            </button>
        </div>
        <div className="hidden sm:flex">
        <button className="flex items-center justify-between px-4 py-3 w-full rounded-2xl text-lg border-slate-400 hover:border-black border-2">Type
                <ChevronRightIcon className="size-6 text-slate-500" />
            </button>
        </div>
        <div className="hidden sm:flex">
        <button className="flex items-center justify-between px-4 py-3 w-full rounded-2xl text-lg border-slate-400 hover:border-black border-2">Car
                <ChevronRightIcon className="size-6 text-slate-500" />
            </button>
        </div>
        <div className="flex">
            <button className="flex items-center px-4 gap-1 w-full rounded-2xl font-semibold text-lg border-slate-400 hover:border-black border-2">
                <AdjustmentsHorizontalIcon className="size-6 text-slate-500" />
                <span className="hidden sm:block">Filtres</span>
            </button>
        </div>
    </div>
  )
}
