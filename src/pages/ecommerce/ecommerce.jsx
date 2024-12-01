// import { useState } from "react";
import { Navigate } from "react-router-dom";
import Menu from "../../components/menu/menu";
import Session from "../../components/session/session";
import './style.css';
export default function Ecommerce() {

    if (sessionStorage.getItem('userData') === null) {
        Navigate('/auth/login');
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    // const [isLoading, setIsLoading] = useState(false);
    console.log(userData ?? 'Sem dados');


    const lstEcommItem = [
        {
            id: 1,
            title: 'Produto 1',
            price: 'R$ 100,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            title: 'Produto 2',
            price: 'R$ 200,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            title: 'Produto 3',
            price: 'R$ 300,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            title: 'Produto 4',
            price: 'R$ 400,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 5,
            title: 'Produto 5',
            price: 'R$ 500,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 6,
            title: 'Produto 6',
            price: 'R$ 600,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 7,
            title: 'Produto 7',
            price: 'R$ 700,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 8,
            title: 'Produto 8',
            price: 'R$ 800,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 9,
            title: 'Produto 9',
            price: 'R$ 900,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 10,
            title: 'Produto 10',
            price: 'R$ 1000,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 11,
            title: 'Produto 11',
            price: 'R$ 1100,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 12,
            title: 'Produto 12',
            price: 'R$ 1200,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 13,
            title: 'Produto 13',
            price: 'R$ 1300,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 14,
            title: 'Produto 14',
            price: 'R$ 1400,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 15,
            title: 'Produto 15',
            price: 'R$ 1500,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 16,
            title: 'Produto 16',
            price: 'R$ 1600,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 17,
            title: 'Produto 17',
            price: 'R$ 1700,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 18,
            title: 'Produto 18',
            price: 'R$ 1800,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 19,
            title: 'Produto 19',
            price: 'R$ 1900,00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 20,
            title: 'Produto 20',
            price: 'R$ 2000,00',
            image: 'https://via.placeholder.com/150'
        },
    ];

    return(

        <>
           <Menu  data={userData??null} />
           <div className="content-principal">
           <Session title={'Produtos'} data={lstEcommItem} />
           <Session title={'Serviços'} data={lstEcommItem} />
           <Session title={'Locais'} data={lstEcommItem} />
           </div>


        </>
    )

}