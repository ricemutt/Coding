import {SquidContextProvider} from '@squidcloud/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <SquidContextProvider
        options={{
            appId: 'kgzpbc346ma2onixuj',
            region: 'us-east-1.aws',
            environmentId: 'dev',
            squidDeveloperId: 'fa2rv0av8lzcrh9i4f',
        }}
    >
        <App/>
    </SquidContextProvider>
);