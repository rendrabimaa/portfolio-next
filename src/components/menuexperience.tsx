"use client"

import { experienceData } from "../app/data/experience";

interface MenuExperiencesProps {
  handleChangeExperience: (code: string) => void;
  code: string;
}

const MenuExperiences: React.FC<MenuExperiencesProps> = ({handleChangeExperience, code}) => {
  return (
    <ul className="flex flex-col">
      {experienceData?.map((exp) => <li className={`cursor-pointer border-l-2 py-1 px-4 ${exp.code === code ? 'border-blue-500 bg-blue-100 text-blue-500' : 'text-slate-700'} `} key={exp.code} onClick={() => handleChangeExperience(exp.code)}>{exp.title}</li>)}
    </ul>
  )
}

export default MenuExperiences