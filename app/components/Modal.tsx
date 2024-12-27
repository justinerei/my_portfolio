import React, { SetStateAction } from 'react'
import ReactDOM from 'react-dom'
import { FaCheckCircle } from "react-icons/fa";

const Modal = ({isOpen} : {isOpen : React.Dispatch<SetStateAction<boolean>>}) => {
  return ReactDOM.createPortal (
    <div className='fixed bg-secondary bg-opacity-50 z-50 w-full h-full flex items-center justify-center top-0'>
        <div className='bg-white p-[50px] rounded-[18px] flex flex-col items-center'>
            <FaCheckCircle className='w-[85px] h-[85px] text-green-500 mb-[1rem]'/>
            <h2 className='text-32-jakarta-green '>Message Sent Successfully!</h2>
            <div>
                <p className='text-14-jakarta text-center mb-[2rem]'>Thank you for contacting me. I will reply as soon as possible!</p>
                <button className='bg-blue-500 w-full px-[20px] py-[10px] rounded-[15px] text-16-jakarta-white' onClick={() => isOpen(false)}>Got It</button>
            </div>
        </div>
    </div>, document.body
  )
}

export default Modal