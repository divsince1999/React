import React, { useState } from 'react'

const Connect = () => {

    const [email, setEmail] = useState();
    const [showElement, setShowElement] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        // alert(event.target[0].value);
        setEmail(event.target[0].value);
        setShowElement(true);
    }

    return (
        <div className='connect-sec py-[100px]'>
            <div className='container'>
                <h2 className='h2 max-w-[780px] mx-auto text-center mb-20'>Have Question In Mind? Let Us Help You</h2>
                <form className='max-w-[1050px] mx-auto' onSubmit={onSubmit}>
                    <div className='field-wrapper relative'>
                        <input type="email" name="email" placeholder='yourmail@gmail.com' className='p-8 bg-[#fff] rounded-[50px] block w-full' />
                        <button type="submit" className='bg-orange rounded-[100px] py-6 px-16 font-bold text-white absolute top-[50%] translate-y-[-50%] right-[10px]'>Submit</button>
                    </div>
                    {showElement && <div className='value-block mt-4'>email is {email}</div>}
                </form>
            </div>
        </div>
    )
}

export default Connect