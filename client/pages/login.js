import { useState } from 'react'
import Menu from '../components/Menu'
import Image from 'next/image'
import medicalRecord from '../public/dossier-medical.svg'

const Login = () => {

    const [hiddenMenu, sethiddenMenu] = useState("hidden")

    const showMenu = () => {
        console.log("The menu icon was clicked")
        if (hiddenMenu === "hidden")
            sethiddenMenu("block");
        else
            sethiddenMenu("hidden")
    }

    return (<>
        <div className="h-screen">
            <Menu showMenu={showMenu} />
            <div id="menu-items" className={`${hiddenMenu} bg-gray-400 text-white font-medium w-5/6 mt-4 h-1/3 opacity opacity-50 rounded-lg mx-auto text-center my-auto`}>
                <ul className="p-2">
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto w-1/3 py-4 rounded mt-10">Accueil</li>
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto w-1/3 py-4 rounded mt-4">A propos de nous</li>
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto w-1/3 py-4 rounded mt-4">Aide</li>
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto w-1/3 py-4 rounded mt-4">S'inscrire</li>
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto w-1/3 py-4 rounded mt-4">S'identifier</li>
                </ul>
            </div>
            <div className="w-5/6 lg:w-11/12 h-2/5 lg:h-3/4 bg-white mx-auto mt-4 lg:mt-20 rounded-lg flex flex-col lg:flex-row justify-between items-center px-4 lg:px-32 gap">
                <div className="hidden lg:block w-1/2"><Image src={medicalRecord} width={1000}
                    height={1000} layout="intrinsic" alt="Picture of the medical record" /></div>
                <div className="w-full lg:w-96 h-5/6 lg:h-3/6 lg:bg-gray-200 rounded-lg mx-auto text-center mt-10">
                    <form className="grid mt-20 justify-items-stretch w-3/4 mx-auto text-center">
                        <input type="text" className="py-5 rounded mr-10 w-full border lg:border-0" placeholder="Addresse e-mail" />
                        <input type="text" className="mt-5 py-5 rounded border lg:border-0" placeholder="Mot de passe" />
                        <button className="mt-5 font-medium text-blue-500 justify-self-end">Mot de passe oublier ?</button>

                        <input className="px-28 py-5 rounded bg-blue-500 mt-14 font-bold text-white" type="submit"></input>
                    </form>
                </div>
            </div>
        </div>

    </>);
}

export default Login;