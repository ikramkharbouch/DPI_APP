import { useState } from 'react'
import Image from 'next/image'
import medicalRecord from '../public/dossier-medical.svg'
import Footer from '../components/Footer'
import Card from '../components/Card'

import NavBar from '../components/NavBar'
import Link from 'next/link'

import withoutAuth from './auth/withoutAuth'

const Register = () => {

    // The state variables

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

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

        setUsername("")
        setEmail("")
        setPassword("")
        setRepeatPassword("")

        const res = await fetch('http://localhost:8000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })

        const formattedRes = await res.json()
        if (res.status !== 200) {
            setErrorMsg(formattedRes.message)
        }
        else if (res.status === 200) {
            setSuccessMsg(formattedRes.message)
        }

        console.log(res.status)

        // Check the status and make a card for the user to update him

        console.log(formattedRes)
    }

    return (<>
        <div className="h-full">
            <NavBar />
            <div id="menu-items" className={`${hiddenMenu} border-2 border-blue-400 text-white font-medium w-5/6 mt-4 h-48 opacity  rounded-lg mx-auto text-center my-auto`}>
                <ul className="p-2">
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto w-1/3 py-4 rounded mt-4 cursor-pointer">S'inscrire</li>
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto w-1/3 py-4 rounded mt-4 cursor-pointer">S'identifier</li>
                </ul>
            </div>

            <div className="w-5/6 lg:w-11/12 h-4/5 lg:h-4/5 bg-white mx-auto mt-4 lg:mt-10 rounded-lg flex flex-col items-center">
                {errorMsg && <Card Message={errorMsg} classnames="bg-red-100 text-red-400 border-red-300" iconColor="red" />}
                {successMsg && <Card Message={successMsg} classnames="bg-green-100 text-green-400 border-green-300" iconColor="green" />}
                <div className="w-1/2 mx-auto text-center mt-10"><Image src={medicalRecord} width={100}
                    height={100} layout="intrinsic" alt="Picture of the medical record" /></div>
                <div className="mt-5 lg:mt-0 w-full h-full lg:h-3/5 rounded-lg mx-auto text-center">
                    <form className="max-w-full grid lg:mt-10 justify-items-stretch w-3/4 mx-auto text-center" onSubmit={handleForm}>

                        <input type="text" className="py-2 pl-5 mt-4 lg:py-5 rounded border lg:border-0" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="text" className="py-2 mt-4 pl-5 lg:py-5 rounded border lg:border-0" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="py-2 mt-4 pl-5 lg:py-5 rounded border lg:border-0" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" className="py-2 mt-4 pl-5 lg:py-5 rounded border lg:border-0" placeholder="Confirmez votre mot de passe" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />

                        <Link href="/login"><a className="flex justify-self-end no-underline"><button className="text-sm lg:text-base mt-4 font-medium text-blue-500 justify-self-end">Avez vous déjà un compte ?</button></a></Link>

                        <input className="min-w-full lg:px-28 py-2 lg:py-5 rounded bg-blue-500 mt-14 font-bold text-white cursor-pointer" type="submit" value="S'inscrire" />
                    </form>
                </div>
            </div>
        </div>
        {/* <Footer /> */}

    </>);
}

export default withoutAuth(Register);