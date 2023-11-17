import {useState} from "react";
import style from './Auth.module.css'

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = () => {
        // Замоканный fetch
        console.log(`Email: ${email}, Password: ${password}`)
        fetch('https://example.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    };
    return (
        <div className={style.container}>
            <div>
                <h2>Вход</h2>

                <h5>Почта:</h5>
                <input
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />


                <h5>Пароль:</h5>
                <input
                    type="password"
                    id="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick={handleSubmit}>Войти</button>
                </div>

            </div>
        </div>
    )
}

export default Auth
