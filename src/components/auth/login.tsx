import { useState } from 'react'
import Button from '../share/components/CustomButton'
import TextField from '../share/components/InputField'

const Login = () => {
    const [loginForm, setLoginForm] = useState<Login>({
        email: '',
        password: '',
    })
    const submit = () => {
        console.log(loginForm)
    }
    return (
        <>
            <form onSubmit={submit}>
                <div className="d-flex justify-content-center mt-4">
                    <div className="flex-column ">
                        <div>
                            <TextField
                                value={loginForm.email}
                                type="email"
                                onChange={function (val: string): void {
                                    setLoginForm({
                                        ...loginForm,
                                        email: val,
                                    })
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                value={loginForm.password}
                                type="password"
                                onChange={function (val: string): void {
                                    setLoginForm({
                                        ...loginForm,
                                        password: val,
                                    })
                                }}
                            />
                        </div>
                        <div className="mb-5">
                            <Button type="submit" className="primary btn">
                                Submit
                            </Button>
                        </div>
                    </div>
                    <div className="flex-column">
                        <div>How are youy</div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Login
