interface TitleSectionProps {
    children: React.ReactNode;
}


const TitleSection: React.FC<TitleSectionProps> = ({children}) => {
  return (
    <div className="text-left text-2xl font-bold flex items-center gap-4 text-thrd-color">
        <span>{children}</span> <hr className="flex-grow bg-frth-color rounded" />
    </div>
  )
}


export default TitleSection