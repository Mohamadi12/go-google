import Image from 'next/image'
import HomeHeader from './components/HomeHeader'
import HomeSearch from './components/HomeSearch'

const Home = () => {
  return (
    <>
      <HomeHeader/>
      <div className='flex flex-col items-center mt-24'>
        <Image
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
             height={300}
             width={100}
             priority
             style={{width:"auto"}}
             alt='google'
        />
        <HomeSearch/>
      </div>
    </>
  )
}

export default Home