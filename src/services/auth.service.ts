import { LoginRequest } from '../components/auth/auth';
import apiInstance from '../helpers/api.interceptor';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = (model: LoginRequest, cb: any): void => {
    apiInstance.post('/Users/authenticate', model).then(
        (res) => {
            cb(res.data);
        },
        (err) => {
            console.log(err);
        }
    );
};
