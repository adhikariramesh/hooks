import React, { useState } from 'react'
import styled from 'styled-components'

const UseStateHooks = () => {
    const [formData, setFormData] = useState({
      userName:"",
      email:"",
      password:"",
      conformPassword:""  
    });

    const handelInput= (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        
            setFormData((prev)=>{
                return {...prev, [name]:value};
            })
    }
   
  return (
        <Wrapper>
            <form action="" method="post">
                <h1>Create account</h1>
               
                <div className="row">
                    <input type="text" name='userName' className='userInput'  placeholder='Enter The User Name' 
                    value={formData.usersName}
                    onChange={handelInput}
                    />
                </div>

                <div className="row">
                    <input type="email" className='userInput' name='email' placeholder='Enter The Email' 
                    value={formData.email}
                    onChange={handelInput}
                    />
                </div>
                <div className="row">
                    <input type="password" className='userInput' name='password' placeholder='Enter The password '
                     value={formData.password}
                     onChange={handelInput}
                     />
                </div>
                <div className="row">
                    <input type="password" className='userInput' name='conformPassword' placeholder='Enter The Conform Password'
                    value={formData.conformPassword}
                    onChange={handelInput}
                    />
                </div>
                <button className='btn'>create account</button>
                <p>My name is {formData.userName} and my email address is {formData.email}</p>
                </form>
        </Wrapper>
            
  )
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #282828;

    form{
        /* border: 2px solid black; */
        padding:30px;
        border-radius: 20px;
        background-color: #538ec1;
        box-shadow: 10px 10px black;
    }
    h1{
        text-align: center;
        font-size: 25px;
        color: white;
        font-weight: bold;
        text-transform: capitalize;
    }
    .row{
        margin: 20px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .userInput{
        padding: 10px 16px;
        font-size: 20px;
        font-weight: 500;
        border: none;
        outline: none;
        border-radius: 5px;
        background: transparent;
        border-bottom: 2px solid white;
        color: white;
        text-transform: capitalize;
    }
    .btn{
        padding:10px 20px;
        border-radius: 20px;
        background-color: gray;
        color: #08dfcd;
        font-weight: bold;
        text-transform: capitalize;
        border: none;
        outline: none;
        transition: all 0.3s ease-in-out;
        margin: 2rem 10rem;
        box-shadow:0 10px 10px blue ;
    }
    .btn:hover{
        transform: scale(1.5);
    }

    p{
        max-width: 30rem;
        text-align: center;
        color: white;
        font-size: 20px;
    }
`;

export default UseStateHooks
