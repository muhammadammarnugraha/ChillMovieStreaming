import HomeTemplates from '../Templates/HomeTemplates'
import AliceH from "../Images/posterHorizontal/aliceInBorderlandHorizontal.png";
import AliceV from "../Images/posterVertical/aliceInBorderlandVertical.png"

function Home() {
  return (
    <div className='flex flex-col justify-center bg-[#181A1C]'>
      <HomeTemplates/>
    </div>
    
  )
}

export default Home