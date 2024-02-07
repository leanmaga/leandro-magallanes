"use client"


import Link from 'next/link';

const Buttons = () => {
  return (
    <>
        <button className='btn btn-sm lg:btn-lg'>
            <a href="#contact">Contact me</a>
        </button>
        <Link className='text-gradient btn-link' href="/pdf/cv.pdf" passHref download='Leandro Magallanes Curriculum Vitae'>
            My Curriculum
        </Link>
    </>
  )
}

export default Buttons