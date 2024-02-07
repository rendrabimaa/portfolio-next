import Image from 'next/image'

const ListTriangle = () => {
  return (
    <Image src={"/icons/triangle.ico"} alt="list-icon" width={12} height={3} className="h-fit rotate-90"></Image>
  )
}

export default ListTriangle
