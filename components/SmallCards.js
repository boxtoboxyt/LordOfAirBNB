import Image from "next/image"

function SmallCards(img, location, temperature) {
  return (
    <div className="relative h-16 w-16">
        <Image src={img}
        alt='bg' fill
         />

    </div>
  )
}

export default SmallCards