
import Header from '../components/Header/Header'

import SliderImg from '../components/Sliders/SliderImg'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <SliderImg/>
        <div className='content'>{children}</div>
    </div>
  )
}

export default DefaultLayout