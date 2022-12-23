import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import ErrorImg from '../pages/image/error.png';
export default function Error() {
    return (
        <div className='error h-screen w-screen bg-black'>
            <div className="pt-[100px]">
                <div className='imgError flex justify-center'>
                    <Image src={ErrorImg} width={300} height={300} />
                </div>
                <h1 className='h1Error text-white flex justify-center'>Axtardığınız səhifə tapılmadı!
                </h1>
                <div className="pError flex justify-center">
                    <p className='text-white'>Yenidən cəhd etmək üçün ana səhifəyə qayıdın.</p>
                </div>
                <div className="linkErr text-white flex items-center justify-center">
                    <span className="iconError"><HiOutlineArrowCircleRight /></span>
                    <Link href='/'>Ana səhifəyə geri dön.</Link>
                </div>
            </div>
        </div>

    )
}