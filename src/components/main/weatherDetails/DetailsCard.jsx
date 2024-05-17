export default function DetailsCard ({title, description, children}) {
  return (
    <div className="flex  bg-white/40 p-5 rounded-xl">
      <div className="flex flex-col gap-3 w-4/5"> 
        <h4 className="text-lg text-gray-900/60"> {title} </h4>
        <span className="text-gray-900 text-2xl"> {description} </span>
      </div>
      <div className="flex items-center">
        {children}
      </div>
    </div>
  )
}