
import DeatilsSide from '../../components/DeatilsSide'

const page = ({params}) => {
     
  return (
    <div className='mt-[50px]'>
        <DeatilsSide params={params.name}/>
    </div>
  )
}

export default page