
const listitems = ({ icon, title, href }) => {
  const currentPath = window.location.href;
  return (
    <a href={href} className={`inline-flex space-x-3 w-full h-full items-center ${currentPath == href ? 'bg-[#F3F4F8]' : 'bg-[#fff]'} mb-5`}>
      <p className="">
        {icon}
      </p>
      <h1 className="">{title}</h1>
    </a>
  )
}
export default listitems