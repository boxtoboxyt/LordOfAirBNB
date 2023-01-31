import Image from "next/image"
import BgLordofTheRings from '../assets/templateimagebnbclean2.jpg'

function banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image src={BgLordofTheRings} alt='bg' fill
          className="object-cover object-center" />

    <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Test dziijidjaadz lorem suazhun </p>
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3">C'est un Test</button>
    </div>

    </div>
  )
}

export default banner