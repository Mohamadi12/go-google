import Link from 'next/link'
import { TbGridDots } from 'react-icons/tb'

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
        <div className="flex space-x-4 items-center">
            <Link href={"https://mail.google.com"} className='hover:underline'>
                Gmail
            </Link>
            <Link href={"https://image.google.com"} className='hover:underline'>
                Image
            </Link>
            <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2'/>
            <button className='bg-blue-500 text-white rounded-md px-6 py-2 font-medium hover:brightness-105 hover:shadow-md transition-shadow'>Sign un</button>
        </div>
    </header>
  )
}

export default HomeHeader