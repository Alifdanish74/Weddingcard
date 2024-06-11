import React from 'react'
import { FaWhatsapp  } from "react-icons/fa";

type Props = {}

function Lebihlanjut({}: Props) {
  return (
    <div className='mt-4'>
        <h1 className='text-black'>Lebih lanjut</h1>
        <a 
          href={"http://wasap.my/601127877926/Tempah-E-kad-jemputan"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-3xl justify-center text-black"
        >
          <FaWhatsapp />
        </a>
    </div>
  )
}

export default Lebihlanjut