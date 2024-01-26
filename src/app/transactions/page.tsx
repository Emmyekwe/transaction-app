import Datatable from '@/components/datatable';



const page = () => {
  return (

    <div className="hidden sm:flex bg-[#E4E4E7] flex-1 text-gray-200  min-h-screen flex-col pl-[70px]">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-[#84919A33] dark:text-gray-400 dark:border-[#EDEDF2]">
         <ul className="flex flex-wrap -mb-px">
             <li className="text-center">
                 <a href="#" className="inline-block p-4 mt-[47px]  text-[#2E2E2E] border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All Accounts</a>
            </li> 
         </ul>
       </div>
       <div>
        <Datatable />
       </div>
    </div>
    
  )
}

export default page