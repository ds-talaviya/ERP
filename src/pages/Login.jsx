import React, { useState } from 'react'

const Login = () => {
    const [userLoginData, setUserLoginData] = useState({ username: 'dhruvil', password: '' });
    const [loginErr, setLoginErr] = useState(false);

    const onsubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        if (!userLoginData.username || !userLoginData.password) {
            alert("Please fill in both fields");
            return;
        } else {
            if (userLoginData.username.trim() == 'dhruvil' && userLoginData.password == "12345") {
                console.log("authenticated");
                setLoginErr(false);
            } else {
                setUserLoginData({ username: userLoginData.username, password: '' })
                setLoginErr(true);
            }
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserLoginData({
            ...userLoginData,
            [name]: value
        });
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-gray-50 px-6 py-10 rounded shadow w-125">
                    <h1 className='header text-center'>Login</h1>
                    <form onSubmit={onsubmit}>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={userLoginData.username}
                            onChange={handleInput}
                            placeholder="Enter Username" />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={userLoginData.password}
                            onChange={handleInput}
                            placeholder="Enter Password" />

                        <div className="flex justify-center mt-5">
                            <button
                                className='btn btn-primary w-50'
                                type="submit">
                                Login
                            </button>
                        </div>

                        {loginErr && (
                            <p className='text-red-700 mt-2 text-center'> Enter valid Username and Password !! </p>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login