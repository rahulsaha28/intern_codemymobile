import React from 'react'
import { useForm } from 'react-hook-form';

type TLoginForm = {
    email:string,
    password:string
}

export const LoginPage = () => {

    const { handleSubmit, register,  formState:{ errors } } = useForm<TLoginForm>()

    const handelLogin = (data:TLoginForm):void=>{

    }
    
    return (
        <div className="container">
        <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-5 col-sm-12">
                <form onSubmit={handleSubmit(handelLogin)}>
                
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" className="form-control" {...register("email", {required:true, pattern:/\S+@\S+.\S+/})} />
                        {errors.email && <div className="alert alert-danger mt-1">Valid email address is require</div> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" {...register("password", {minLength:6, required:true})} />
                        {errors.password && <div className="alert alert-danger mt-1">password must be equal or gatter than 6</div> }
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
    )
}
