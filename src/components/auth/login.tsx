import { useState } from 'react';
import validator from 'validator';
import Button from '../share/components/CustomButton';
import TextField from '../share/components/InputField';
import * as authService from '../../services/auth.service';
import { User, LoginRequest } from './auth';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store';
import { useDispatch } from 'react-redux';
const Login = (): JSX.Element => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { AddToken } = bindActionCreators(actionCreators, dispatch);
    const [loginForm, setLoginForm] = useState<LoginRequest>({
        email: '',
        password: '',
    });
    const [emailError, setEmailError] = useState<string | null>(null);
    const submit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (!validator.isEmail(loginForm.email)) {
            setEmailError('Enter valid Email!');
            return;
        }
        authService.login(loginForm, (res: User) => {
            AddToken(res.jwtToken);
            history.push('/');
        });
    };
    return (
        <>
            <form onSubmit={submit}>
                <div className="d-flex justify-content-center mt-4">
                    <div className="flex-column">
                        <div className="d-flex flex-column ">
                            <TextField
                                value={loginForm.email}
                                type="email"
                                name="email"
                                onChange={function (val: string): void {
                                    setLoginForm({
                                        ...loginForm,
                                        email: val,
                                    });
                                }}
                                required={true}
                            />
                            {emailError && <span>{emailError}</span>}
                        </div>
                        <div>
                            <TextField
                                value={loginForm.password}
                                type="password"
                                onChange={function (val: string): void {
                                    setLoginForm({
                                        ...loginForm,
                                        password: val,
                                    });
                                }}
                                required={true}
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
    );
};
export default Login;
