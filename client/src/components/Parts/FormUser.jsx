import React, { useEffect, useState } from 'react'
import getPlace from '../functions/GetPlace';

const FormUser = (props) => {
        const [name, setName] = useState('1111111');
        const [phone, setPhone] = useState('0123456789');
        const [password, setPassword] = useState('111111111');
        const [checkPassword, setCkeckPassword] = useState('111111111');
        
        const handleNameChange = (event) => {
            const newName = event.target.value;
            setName(newName);
        };
        const isNameShort = name.length < 6;

        const handlePhone = (event) => {
            const newPhone = event.target.value;
            setPhone(newPhone);
        };
        const isNotPhone = phone.length !== 10 ;

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

        const handleSubmit = (event) => {
            if (notSamePassword || isNameShort || isNotPhone || isPasswordShort) {
                event.preventDefault();
            }
        };
    useEffect(()=>{
        getPlace('wilayaSelect0','dairaSelect0','baladiaSelect0');
    })
    return (
        <form action="" method='get' className={props.activeForm === 'client' ? 'active p-4' : 'hidden'}>
            <div className="parts flex">
            <div className="part flex flex-col gap-4">
                <div className="input flex flex-col">
                    <label htmlFor="name">الإسم الكامل</label>
                    <input type="text" id='name' name='name' className={isNameShort ? 'red-border':null} onChange={handleNameChange} required />
                    <small className={isNameShort ? ' text-red-700':'hidden'}>يجب أن يكون الإسم أطول من 6 أحرف</small>
                </div>
                <div className="input flex flex-col">
                    <label htmlFor="email">البريد الإلكتروني</label>
                    <input type="email" id='email' name='email' required />
                </div>
                <div className="input flex flex-col">
                    <label htmlFor="phone">رقم الهاتف</label>
                    <input type="number" id='phone' name='phone' required className={isNotPhone ? 'red-border' :null} onChange={handlePhone} />
                    <small className={isNotPhone ? ' text-red-700' : 'hidden'} >رقم هاتف غير صالح</small>
                </div>
                <div className="input flex flex-col">
                    <label htmlFor="password">كلمة السر</label>
                    <input type="password" id='password' name='password' className={isPasswordShort ? 'red-border' :null} onChange={handlePassword} required />
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
                    <label htmlFor="birthday">تاريخ الميلاد</label>
                    <input type="date" id='birthday' name='birthday' required />
                </div>
                <div className="input flex flex-col">
                    <label htmlFor="address">مكان السكن</label>
                    <div className="places flex flex-col gap-2">
                        <div className="wilaya">
                            <label htmlFor="wilaya" className=' ml-1' >الولاية</label>
                            <select name="wilaya" id="wilaya" className='wilayaSelect0' required >
                                
                            </select>
                        </div>
                        <div className="daira">
                            <label htmlFor="daira" className=' ml-1'>الدائرة</label>
                            <select name="daira" id="daira" className='dairaSelect0' required>
                            </select>
                        </div>
                        <div className="baladia">
                            <label htmlFor="baladia" className=' ml-1' >البلدية</label>
                            <select name="baladia" id="baladia" className='baladiaSelect0' required>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="input flex flex-col">
                    <label htmlFor="sportFav">رياضتك المفضلة</label>
                    <input type="text" name="sportFav" id="sportFav" required />
                </div>
                <div className="input flex flex-col">
                    <label htmlFor="gender">الجنس</label>
                    <select name="gender" id="gender" required>
                        <option value="man" selected>ذكر</option>
                        <option value="woman">انثى</option>
                    </select>
                </div>
            </div>
            </div>
            <input type="submit" value="إنشاء حساب" className=' cursor-pointer' onClick={handleSubmit}/>
        </form>
    )
}

export default FormUser