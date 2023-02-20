import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const payload = { email, password };
        console.log(payload);
    }

    return (
        <div>
            <h3>Login Page</h3>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
            />
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />
            <br />
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    )
}

export default Login;