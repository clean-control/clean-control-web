// import { useState } from "react";
import { Navigate } from "react-router-dom";
import Menu from "../../components/menu/menu";
export default function Ecommerce() {

    if (sessionStorage.getItem('userData') === null) {
        Navigate('/auth/login');
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    // const [isLoading, setIsLoading] = useState(false);
    console.log(userData ?? 'Sem dados');

    return(

        <>
           <Menu  data={userData??null} />
           <div className="content-principal">

                <h1>Olá, {userData?.name ?? 'sem nome'}</h1>
aiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
           </div>


        </>
    )

}