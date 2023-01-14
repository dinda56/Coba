export default function Home() {
  return (
   <>
   <div className="container container-full">
                <form className="w-50">
                    <div className="display-4 pb-3">Register</div>
                    <div className="form-outline mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            required
                        />
                    </div>
                    <input type="submit" value="Sign in" className="btn btn-primary btn-block mb-4" />
                    <div className="text-center">
                        <p>Sudah punya akun? <a href="/login">Login</a></p>
                    </div>
                </form>
            </div>    
   </>
  )
}