import styled from "styled-components";



const Login = () => {

    const LoginContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    `;

    const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 400px;
        width: 300px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        gap: 10px;
        justify-content: center;
        

        button {
            border: none;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border-radius: 5px;
            width: 50%;
            cursor: pointer;
            margin-top: 30px;
        }
        
        label{
            font-size: 18px;
            margin-top: 20px;
            font-weight: bold;
        }

        h1{
            margin-bottom: 40px;
        }
    `;

    return (
        <LoginContainer>
            
            <Form>
                <h1>Login</h1>

                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Login</button>
            </Form>
        </LoginContainer>
    );
};
export default Login;