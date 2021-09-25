import { useState } from 'react'
import Menu from '../components/Menu'
import Image from 'next/image'
import medicalRecord from '../public/dossier-medical.svg'
import Footer from '../components/Footer'

const Register = () => {

    // The state variables

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    

    const [hiddenMenu, sethiddenMenu] = useState("hidden")

    const showMenu = () => {
        console.log("The menu icon was clicked")
        if (hiddenMenu === "hidden")
            sethiddenMenu("block");
        else
            sethiddenMenu("hidden")
    }

    const handleForm = async (e) => {

        e.preventDefault()

        const data = {
            username, email, password, repeatPassword
        }

        const res = await fetch('http://localhost:8000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(data)
        })

        const formattedRes = await res.json()

        console.log(formattedRes)
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
            <div className="w-5/6 lg:w-11/12 h-3/5 lg:h-3/4 bg-white mx-auto mt-4 lg:mt-20 rounded-lg flex flex-col lg:flex-row justify-between items-center lg:px-32 gap">
                <div className="hidden lg:block w-1/2"><Image src={medicalRecord} width={1000}
                    height={1000} layout="intrinsic" alt="Picture of the medical record" /></div>
                <div className="w-full lg:w-3/5 h-5/6 lg:h-4/6 lg:bg-gray-200 rounded-lg mx-auto text-center lg:mt-10">
                    <form className="max-w-full grid mt-20 lg:mt-11 justify-items-stretch w-3/4 mx-auto text-center p-0 m-0" onSubmit={handleForm}>

                        <input type="text" className="py-2 pl-5 mt-5 lg:py-5 rounded border lg:border-0" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="text" className="py-2 mt-5 pl-5 lg:py-5 rounded border lg:border-0" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" className="py-2 mt-5 pl-5 lg:py-5 rounded border lg:border-0" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" className="py-2 mt-5 pl-5 lg:py-5 rounded border lg:border-0" placeholder="Confirmez votre mot de passe" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>

                        <button className="text-xs md:text-base lg:text-base mt-5 font-medium text-blue-500 justify-self-end">Avez vous déjà un compte ?</button>

                        <input className="min-w-full lg:px-28 py-2 lg:py-5 rounded bg-blue-500 mt-14 font-bold text-white" type="submit" value="S'inscrire" />
                    </form>
                </div>
            </div>
        </div>
        <Footer />

    </>);
}

export default Register;