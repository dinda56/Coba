import {useState} from 'react'
import axios from 'axios';

export default function Login() {
  const [email, setEmail ] = useState();
  const [password, setPassword ] = useState();

  const submitLogin = async (event) => {
    event.preventDefault();
    try{
      await axios.post('http://localhost:5000/user/login', {
        email, password
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    } catch (err){
      console.log(err);
    }
  }

  
  return (
   <>
    <div className="container container-full">
                
                <form onSubmit={submitLogin} className="w-50">
                    <div className="display-4 pb-3">LOGIN</div>
                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            onChange = {(e) => setEmail(e.target.value)}
                            value={email || ""}
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            onChange = {(e) => setPassword(e.target.value)}
                            value={password || ""}
                            required
                        />
                    </div>
                    <input type="submit" value="Log in" className="btn btn-primary btn-block mb-4" />
                    <div className="text-center">
                        <p>Belum punya akun? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
    
   </>
  )
}