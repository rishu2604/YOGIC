import React, { useState } from 'react';
import '../SCSS/form.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'firebase/firestore';
import {firestore} from "../firebaseConfig"
import { collection, addDoc } from "firebase/firestore";
export default function Form() {
    
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [medical, setMedical] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [date, setDate] = useState(new Date());
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (parseInt(age, 10) < 0) {
            alert('Age cannot be negative.');
            return;
        }
        
            // Push data to the database
            const docRef = await addDoc(collection(firestore, "users"), {
                name,
                gender,
                age,
                contactNo,
                email,
                medical,
                isChecked,
                date: date.toString(), // Convert the date to a string
            });
        
                // Clear the form after submitting
                setName('');
                setGender('');
                setAge('');
                setContactNo('');
                setEmail('');
                setIsChecked(false);
                setMedical('');
                setDate(new Date());
            
        };

        return (
                <div className='formdiv'>
            <form onSubmit={handleSubmit}>
                <input className='form-box'
                    type="text" value={name} placeholder='Name *' onChange={(e) => setName(e.target.value)} required/>
            
            <br />
            {/* <input type='text' /> */}

            
            <input className='form-box'
                type="number"
                placeholder='Age *'
                value={age}
                onChange={(e) => setAge(Math.max(0, parseInt(e.target.value, 10)))}
                required
                />
            
            <br />

            
            <input className='form-box' type="number" placeholder='Contact No. *' value={contactNo} onChange={(e) => setContactNo(e.target.value)} required/>
            
            <br />

            <input className='form-box' type="email" placeholder='Email *' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <br />
            {/* Health Information */}
                <input className='form-box' type='text' placeholder='Medical Conditions (if any)' value={medical}
                    onChange={(e) => setMedical(e.target.value)}>
                </input>
        
            <br />
            <label className='lbl'>Preferred date & time for Booking the appointment</label>
            <br />
            <DatePicker className='form-box'
            selected={date}
            // value={date}
            showTimeSelect
            dateFormat="Pp"
            // dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            onChange={(e)=>setDate(e)}
            showYearDropdown
            scrollableYearDropdown
            />
        
            <br />

            <div className="custom-select">
                <select  value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <br />
            <label className='form-check'>
                <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                Kindly confirm if you grant us permission to utilize your data for research purposes. 
            </label>
            <br />
            <label className='necessary'> Fields containing * are necessary </label>
            <br />
            <button className='btn' type="submit" onSubmit={handleSubmit} >Submit</button>
            <br />
            <br />
            <p>or</p>
            <button className='btn' type="submit"  >Email Us to get your reports</button>
            </form>
        </div>

    );
};

