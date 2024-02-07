"use client"

import MenuExperiences from "../../components/menuexperience"
import { experienceData } from "../../app/data/experience"
import { useEffect, useState } from "react"
import ListTriangle from "@/components/ListTriangle";
import TitleSection from "@/components/TitleSection";

interface ExperienceType {
    code: string;
    title: string;
    position: string;
    place: string;
    duration: string;
    jobdesc: string[];
}


const Experience = () => {
  const [experience, setExperience] = useState<ExperienceType[]>();
  const [code, setCode] = useState<string>("1");

  useEffect(() => {
    const getData = () => {
        const filteredDataExperience = experienceData?.filter((item: ExperienceType) => {
            return item.code === code;
        })
        setExperience(filteredDataExperience);
    }
    getData();

  }, [code])

  const handleChangeExperience = (codeExp: string) => {
    setCode(codeExp);
  }

  return (
    <div className="w-8/12 mx-auto">
        <TitleSection>
            My Experience&apos;s
        </TitleSection>
        <div className="flex gap-8 mt-8">
            <MenuExperiences handleChangeExperience={handleChangeExperience} code={code} />
            
                {experience?.map((exp) => (
                <div key={exp.code}>                
                    <h3 className="">
                        <span className="text-thrd-color font-semibold text-xl">
                            {exp.position} 
                        </span>
                        <span className="text-scnd-color font-semibold text-md ml-2">
                            ( {exp.place} )
                        </span>
                    </h3>
                    <h4 className="mt-2 text-frth-color text-sm">
                        {exp.duration}
                    </h4>
                    <ul className="mt-4 text-frth-color text-sm space-y-2   ">
                    {exp.jobdesc?.map((desc, index) => (
                        <li className="flex" key={index}>
                            <ListTriangle />
                            <p className="ml-2 -mt-[5px]">
                                {desc}
                            </p>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            
        </div>
    </div>
  )
}

export default Experience