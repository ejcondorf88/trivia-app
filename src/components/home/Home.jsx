import './home.css'

import { PrimeReactProvider } from 'primereact/api';
import { Name } from '../name/Name';
import { Table } from '../table/Table';
        
const getBestPlayer = () => {
    const bestPlayer = localStorage.getItem('bestPlayer')
    return JSON.parse(bestPlayer)
}
export const Home = () => {
    return (
        <PrimeReactProvider>
        <div className="home">
            <Table />
            <Name />
        </div>
        </PrimeReactProvider>
    )
}