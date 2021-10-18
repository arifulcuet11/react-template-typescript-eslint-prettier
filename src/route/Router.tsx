import { Route, Switch } from 'react-router'
import Login from '../components/auth/login'
import Registration from '../components/auth/register'
import Home from '../components/home/Home'

const Router = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/auth/sign-up" component={Registration} />
                <Route path="/auth/login" component={Login} />
            </Switch>
        </>
    )
}
export default Router
