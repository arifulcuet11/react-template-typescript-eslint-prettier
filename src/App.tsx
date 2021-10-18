import './App.css';
import Router from './route/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout';
function App() {
    return (
        <Layout>
            <main>
                <Router />
            </main>
        </Layout>
    );
}

export default App;
