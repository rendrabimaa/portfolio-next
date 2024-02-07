import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="w-full bg-main-color border-b-2 p-4 fixed z-10">
      <div className="w-4/5 mx-auto flex justify-between">
        <p className="text-thrd-color ">RB</p>
        <ul className="flex gap-8 text-thrd-color">
            <li><Link href={"/#about"} className="hover:text-scnd-color">About</Link></li>
            <li><Link href={"/#experience"} className="hover:text-scnd-color">Experience</Link></li>
            <li><Link href={"/#projects"} className="hover:text-scnd-color">Projects</Link></li>
            <li><Link href={"/#contanct"} className="hover:text-scnd-color">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar