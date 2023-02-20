import { useEffect, useState } from "react";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [city, setCity] = useState("");


    const handleRegister = () => {
        const payload = { name, email, gender, password, age, city };
        // console.log(payload);

        fetch("")
    }

    return (
        <div>
            <h3>Register Page</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
            />
            <br />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
            />
            <br />
            <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="Enter Gender"
            />
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />
            <br />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
            />
            <br /><input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
            />
            <br />
            <button onClick={handleRegister}>REGISTER</button>
        </div>
    )
}

export default Register;