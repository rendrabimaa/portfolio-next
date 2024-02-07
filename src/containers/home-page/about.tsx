import ListTriangle from "@/components/ListTriangle"
import TitleSection from "@/components/TitleSection"
import Image from "next/image"

const About = () => {
  return (
    <div className="w-9/10 mx-auto">
        <div className="flex text-frth-color mt-4">
            <div>
                <TitleSection>
                        About Me
                </TitleSection>
                <div className="space-y-4 mt-8">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, cum. Aperiam, consequuntur. Accusantium consequuntur natus facere soluta cupiditate harum, impedit qui dicta inventore fugiat non ullam iste vero adipisci earum!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos tempore ex corporis excepturi, quibusdam necessitatibus eum illum pariatur quaerat quis sed atque inventore officia doloribus, aut vel voluptatum veritatis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae consequuntur ratione dolorum soluta id vel delectus vitae, architecto tenetur quidem aut facilis. Amet, iste! Aperiam cupiditate vel dolores in ratione.
                    </p>
                    <div className="list-none flex justify-between w-3/4">
                        <ul>
                            <li className="w-full flex items-center">
                                <ListTriangle />
                                <p className="ml-2">
                                    Javascript (ES6+)
                                </p>
                            </li>
                            <li className="w-full flex items-center">
                                <ListTriangle />
                                <p className="ml-2">
                                    React
                                </p>
                            </li>
                            <li className="w-full flex items-center">
                                <ListTriangle />
                                <p className="ml-2">
                                    CSS
                                </p>
                            </li>
                        </ul>
                        <ul>
                            <li className="w-full flex items-center">
                                <ListTriangle />
                                <p className="ml-2">
                                    Tailwind CSS
                                </p>
                            </li>
                            <li className="w-full flex items-center">
                                <ListTriangle />
                                <p className="ml-2">
                                    Typescript
                                </p>
                            </li>
                            <li className="w-full flex items-center">
                                <ListTriangle />
                                <p className="ml-2">
                                    Next JS
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia eius quaerat nulla eos consequuntur nisi, itaque corporis tenetur vel obcaecati nesciunt dicta laborum quasi asperiores quisquam, ut illum doloribus perspiciatis?
            </div>
        </div>
    </div>
  )
}

export default About