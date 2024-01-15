import React from 'react'
import FormComponent from '../components/form';
import NavbarComponent from '../components/navbar'

function LoginPage() {
    return (
        <div className="background-container">
            <NavbarComponent/>
            <div>
                <FormComponent/>
            </div>
        </div>
    )
}

export default LoginPage
