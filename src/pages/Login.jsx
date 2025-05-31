import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userLoggedIn } from '../auth/auth';

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm({
        defaultValues: {
            username: 'dhruvil',
            password: 12345
        }
    });

    const onSubmit = (data) => {
        if (!data.username || !data.password) {
            alert("Please fill in both fields");
            return;
        } else {
            if (data.username.trim() == 'dhruvil' && data.password == "12345") {
                console.log("authenticated");
                reset();
                userLoggedIn();
                navigate("/");
            } else {
                setValue('password', '');
            }
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-gray-50 px-6 py-10 rounded shadow w-125">
                    <h1 className='header text-center'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                {...register("username", { required: "Username is required" })}
                                placeholder="Enter Username" />
                            {errors.username && (
                                <p className="text-red-500 text-sm">{errors.username.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 5,
                                        message: "Password must be at least 5 characters"
                                    }
                                })}
                                placeholder="Enter Password" />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>
                        <div className="flex justify-center mt-5">
                            <button
                                className='btn btn-primary w-50'
                                type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login