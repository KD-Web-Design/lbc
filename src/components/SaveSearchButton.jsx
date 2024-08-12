import { BellIcon } from '@heroicons/react/24/outline'

export default function SaveSearchButton() {
  return (
    <div className="sticky bottom-4 left-1/2 transform -translate-x-1/2 w-fit mx-auto flex items-center p-4">
        <BellIcon className='size-4 text-slate-50 absolute ml-3 pointer-events-none' />
        <button className='font-semibold text-slate-50 bg-[#EC5A13] py-3 rounded-xl pl-8 pr-4 hover:bg-[#fd9d6c] whitespace-nowrap text-xs'>Sauvegarder la recherche</button>
    </div>
  )
}
