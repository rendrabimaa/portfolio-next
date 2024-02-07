
const Hero = () => {
  return (
    <div className="space-y-2 lg:space-y-5">
        <p className="text-sm lg:text-xl text-scnd-color">
            Hi, my name is
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-thrd-color">
            Rendra Bimaa.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-frth-color">
            Front-End Web Developer
        </h2>
        <p className="text-sm lg:text-md w-3/5 mt-10 text-frth-color">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit impedit hic nihil a cupiditate, illo quas ipsum fugit natus sit nam necessitatibus illum ex accusantium porro quisquam, debitis earum possimus!
        </p>
        <button className="border-scnd-color border-2 rounded text-scnd-color p-4 font-semibold ">
            Download My Resume
        </button>
    </div>
  )
}

export default Hero