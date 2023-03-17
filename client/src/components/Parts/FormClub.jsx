import React, { useEffect, useState } from 'react'
import getPlace from '../functions/GetPlace';

const FormClub = (props) => {
        const [name, setName] = useState('1111111');
        const [phone, setPhone] = useState('0123456789');
        const [password, setPassword] = useState('111111111');
        const [checkPassword, setCkeckPassword] = useState('111111111');

        const handleNameChange = (event) => {
                const newName = event.target.value;
                setName(newName);
        };
        const isNameShort = name.length < 6;

        const handlePassword = (event) => {
                const newPassword = event.target.value;
                setPassword(newPassword);
        };
        const isPasswordShort = password.length < 8;

        const handleCheckPassword = (event) => {
                const checkedPassword = event.target.value;
                setCkeckPassword(checkedPassword);
        };
        const notSamePassword = password !== checkPassword;

        const handlePhone = (event) => {
            const newPhone = event.target.value;
            setPhone(newPhone);
        };
        const isNotPhone = phone.length !== 10 ;
    useEffect(()=>{
        getPlace('wilayaSelect1','dairaSelect1','baladiaSelect1');
    })
    return (
        <form action="" className={props.activeForm === 'club' ? 'active p-4' : 'hidden'}>
            <div className="parts flex">
            <div className="part flex flex-col gap-4">
                <div className="input flex flex-col">
                        <label htmlFor="name">إسم النادي الرياضي</label>
                        <input type="text" id='name' name='name' className={isNameShort ? 'red-border':null} onChange={handleNameChange} required />
                        <small className={isNameShort ? ' text-red-700':'hidden'}>يجب أن يكون الإسم أطول من 6 أحرف</small>
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="email">البريد الإلكتروني</label>
                        <input type="email" id='email' name='email' required />
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="phone">رقم الهاتف</label>
                        <input type="number" id='phone' name='phone' className={isNotPhone ? 'red-border' :null} onChange={handlePhone} required />
                        <small className={isNotPhone ? ' text-red-700' : 'hidden'} >رقم هاتف غير صالح</small>
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="password">كلمة السر</label>
                        <input type="password" id='password' className={isPasswordShort ? 'red-border' :null} onChange={handlePassword} name='password' required />
                        <small className={isPasswordShort ? ' text-red-700':'hidden'}>يجب أن تكون كلمة السر أطول من 8 أحرف</small>
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="confirmPassword">تأكيد كلمة السر</label>
                        <input type="password" id='confirmPassword' name='confirmPassword' className={notSamePassword ? 'red-border' :null} onChange={handleCheckPassword} required />
                        <small className={notSamePassword ? ' text-red-700':'hidden'}>كلمتي السر غير متطابقتين</small>
                </div>
        </div>
        <div className="part flex flex-col gap-4">
                <div className="input flex flex-col">
                        <label htmlFor="birthday">تاريخ تأسيس النادي</label>
                        <input type="date" id='birthday' name='birthday' required />
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="address">موقع النادي</label>
                        <div className="places flex flex-col gap-2">
                                <div className="wilaya">
                                        <label htmlFor="wilaya" className=' ml-1' >الولاية</label>
                                        <select name="wilaya" id="wilaya" className='wilayaSelect1'>
                                                
                                        </select>
                                </div>
                                <div className="daira">
                                        <label htmlFor="daira" className=' ml-1' >الدائرة</label>
                                        <select name="daira" id="daira" className='dairaSelect1'>
                                        </select>
                                </div>
                                <div className="baladia">
                                        <label htmlFor="baladia" className=' ml-1' >البلدية</label>
                                        <select name="baladia" id="baladia" className='baladiaSelect1'>
                                        </select>
                                </div>
                        </div>
                </div>
                <div className="input flex flex-col">
                        <label htmlFor="sportFav">رياضة النادي</label>
                        <input type="text" name="sportFav" id="sportFav" />
                </div>
        </div>
        </div>
        <input type="submit" value="إنشاء حساب" className=' cursor-pointer'/>
        </form>
        )
}

export default FormClub