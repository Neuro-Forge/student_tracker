import '../css/login.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export default function Login(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handelLogin = (e)=>{
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({email,role : 'student'}));
    navigate('/dashboard');
}

 return(
    <div className={login}>
        <h1>Login</h1>
        <form>
            <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder="Password"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit">Login</button>
        </form>

    </div>
 )

}