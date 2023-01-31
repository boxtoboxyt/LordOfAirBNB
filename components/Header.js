import Image from "next/image"
import Logo from '../assets/logobnb.png'
import { MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 backdrop-blur-sm bg-white/30 shadow-md p-5 md:px-10">
 {/* left - le logo */}
        <div className="relative flex items-center cursor-pointer h-20 my-auto">
        <Image src={Logo} alt='logo' fill
          className="object-contain object-left" />
        </div>

{/* middle - la barre de recherche */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
       <input type='text' placeholder="Recherche..." className="placeholder-gray-400 text-sm text-gray-600 flex-grow pl-5 bg-transparent outline-none mx-auto md:mx-2" />
       <MagnifyingGlassIcon className="hidden md:inline-flex h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

{/* right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Entrez dans la terre du Milieu</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className='h-6 cursor-pointer' />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
        </div>
</header>
  )
}


