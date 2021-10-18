import apiInstance from '../helpers/api.interceptor';

export const login = (model: Login, cb: any): void => {
    apiInstance.post('/Users/authenticate', model).then(
        (res) => {
            cb(res);
        },
        (err) => {
            console.log(err);
        }
    );
};
