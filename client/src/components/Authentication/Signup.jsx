import React, { useState } from 'react'
import FormClub from '../Parts/FormClub';
import FormUser from '../Parts/FormUser';
import './style.css'

const Signup = () => {
  const [activeForm, setActiveForm] = useState('client');

  const handleFormClick = (formId) => {
    setActiveForm(formId);
  }
  return (
        <div className='signup'>
          <div className="signupIntro">
            <h1 className='relative text-white my-3 mx-auto w-full text-4xl'>إنشاء حساب</h1>
            {/* <p>
              مرحبا بك في 
              <span> DZSPORTS </span>
              سعيدون جدا برغبتك في الإلتحاق بعائلتنا الرياضية ونتشرف بوجودك معا
              <br />
              فضلا تأكد أثناء إنشاء الحساب من إن كنت ترغب في التسجيل 
              <span> كمستخدم </span>
              <span>أو كصالة رياضية </span>
            </p> */}
          </div>
          <div className="signupInfo">
            <div className="typesOfUsers w-full flex justify-between">
              <span className={activeForm === 'client' ? 'active cursor-pointer' : 'cursor-pointer'} onClick={() => handleFormClick('client')}>زبون</span>
              <span className={activeForm === 'club' ? 'active cursor-pointer' : 'cursor-pointer'} onClick={() => handleFormClick('club')}>نادي رياضي</span>
            </div>
            <div className="forms">
              <FormUser activeForm={activeForm} />
              <FormClub activeForm={activeForm} />
            </div>
          </div>
        </div>
  )
}

export default Signup