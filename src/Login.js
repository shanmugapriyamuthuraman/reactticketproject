import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [userName, setName] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const getchange = (eve) => {

        if (eve.target.name==="UserName") {
            setName(eve.target.userName);
        }
        else {
            setpassword(eve.target.password);
        }
    }

    const clickevent = () => {
        if (userName == "" && password == "") {
            alert("please fill the userName ")
            alert("please fill the password")
        }
        else if (userName == "") {
            alert("please fill the userName")
        }
        else if (password == "") {
            alert("please fill the password")
        }
        else if (userName != "" && password != "") {
            navigate("/Home")
        }

    }
    return (
        <div className='login'>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="UserName" name="UserName" variant="outlined" onChange={getchange} />
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic"
                    name="Password"
                    label="password"
                    variant="outlined"
                    onChange={getchange}
                />
            </Box>
            <Button variant="contained" onClick={() => clickevent()}>Login</Button>
        </div>

    )
}

export default Login
