import { StarIcon } from "@heroicons/react/24/solid"

export default function Footer() {
  return (
    <div className=' bg-slate-800 p-5'>
        <div className="lg:w-[1000px] mx-auto w-full flex justify-between items-center">
            <span className='text-slate-50 text-wrap pr-1'>leboncoin 2006-2024</span>
            <div className="flex">
                <button className='bg-emerald-500 text-slate-50 p-1 px-2 rounded-l-sm flex items-center'>
                <StarIcon className="size-5 mr-1" />
                Truspilot</button>
                <button className='bg-slate-100 text-slate-500 p-1 rounded-r-sm'>158.0k avis</button>
            </div>
        </div>
    </div>
  )
}
