import banner from '../assets/banner.png';
export default function Banner(){
    return(
        <div className='w-full px-10 flex items-center justify-center py-3'>
            <img src={banner} alt="banner" className='w-[70vw] h-auto object-cover rounded-lg' />
        </div>
    )
}