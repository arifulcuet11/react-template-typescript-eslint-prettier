import './App.css';
import Router from './route/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducer';
function App() {
    const token = useSelector((state: RootState) => state.Token);
    console.log(token);
    return (
        <Layout>
            <main>
                <Router />
            </main>
        </Layout>
    );
}

export default App;
