// import { useState } from "react";
import { Navigate } from "react-router-dom";
import Menu from "../../components/menu/menu";
import Session from "../../components/session/session";
import './style.scss';
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
            title: 'Vivano restaurante vegano',
            image: 'https://via.placeholder.com/300'
        },
        {
            id: 2,
            title: 'Produto 2',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            title: 'Produto 3',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            title: 'Produto 4',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 5,
            title: 'Produto 5',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 6,
            title: 'Produto 6',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 7,
            title: 'Produto 7',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 8,
            title: 'Produto 8',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 9,
            title: 'Produto 9',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 10,
            title: 'Produto 10',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 11,
            title: 'Produto 11',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 12,
            title: 'Produto 12',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 13,
            title: 'Produto 13',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 14,
            title: 'Produto 14',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 15,
            title: 'Produto 15',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 16,
            title: 'Produto 16',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 17,
            title: 'Produto 17',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 18,
            title: 'Produto 18',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 19,
            title: 'Produto 19',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 20,
            title: 'Produto 20',
            image: 'https://via.placeholder.com/150'
        },
    ];

    return(

        <>
           <Menu  data={userData??null} />
           <div className="content-principal">
           <Session title={'Destaques'} data={lstEcommItem} />
           <Session title={'Melhores Avaliados'} data={lstEcommItem} />
           <Session title={'Curtir em grupo'} data={lstEcommItem} />
           </div>


        </>
    )

}