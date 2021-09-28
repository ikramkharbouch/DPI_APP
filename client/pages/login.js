import { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import Image from 'next/image'
import medicalRecord from '../public/dossier-medical.svg'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { useRouter } from 'next/router'

import withoutAuth from './auth/withoutAuth'

const Login = ({cookies}) => {

    const [hiddenMenu, sethiddenMenu] = useState("hidden")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    // Set router
    const router = useRouter()

    useEffect(() => {
        console.log(cookies['jwt'])
        localStorage.setItem('jwt', cookies['jwt'])
    }, [])

    const showMenu = () => {
        console.log("The menu icon was clicked")
        if (hiddenMenu === "hidden")
            sethiddenMenu("block");
        else
            sethiddenMenu("hidden")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = { username, password }

        const res = await fetch("http://localhost:8000/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            credentials: 'include',
            body: JSON.stringify(data)
        })

        setUsername("")
        setPassword("")

        const formattedRes = await res.json()

        if (res.status !== 200) {
            setErrorMsg(formattedRes.message)
        } else if (res.status === 200)
        {
            // router.reload()
            // router.push('/home')
        }

        console.log(formattedRes)

    }

    return (<>
        <div className="h-screen">
            <Menu showMenu={showMenu} />
            <div id="menu-items" className={`${hiddenMenu} text-white font-bold w-5/6 mt-4 h-48 rounded-lg mx-auto text-center my-auto`}>
                <ul className="p-2">
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto py-4 rounded mt-4 w-full">S'inscrire</li>
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto py-4 rounded mt-4 w-full">S'identifier</li>
                </ul>
            </div>
            <div className="w-5/6 lg:w-11/12 h-3/5 lg:h-3/4 bg-white mx-auto mt-4 lg:mt-20 rounded-lg flex flex-col lg:flex-row justify-between items-center lg:px-32 gap">
                <div className="hidden lg:block w-1/2"><Image src={medicalRecord} width={1000}
                    height={1000} layout="intrinsic" alt="Picture of the medical record" /></div>
                    {errorMsg && <Card Message={errorMsg} classnames="bg-red-100 text-red-400 border-red-300" iconColor="red"/>}
                    {successMsg && <Card Message={successMsg} classnames="bg-green-100 text-green-400 border-green-300" iconColor="green"/>}
                <div className="w-full lg:w-3/5 h-5/6 lg:h-4/6 lg:bg-gray-200 rounded-lg mx-auto text-center lg:mt-10">
                    <form className="max-w-full grid mt-20 lg:mt-11 justify-items-stretch w-3/4 mx-auto text-center p-0 m-0" onSubmit={handleSubmit}>

                        <input type="text" className="py-2 mt-5 pl-5 lg:py-5 rounded border lg:border-0" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" className="py-2 mt-5 pl-5 lg:py-5 rounded border lg:border-0" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button className="text-sm lg:text-base mt-5 font-medium text-blue-500 justify-self-end">Avez vous déjà un compte ?</button>

                        <input className="min-w-full lg:px-28 py-2 lg:py-5 rounded bg-blue-500 mt-14 font-bold text-white" type="submit" value="S'identifier" />
                    </form>
                </div>
            </div>
        </div>
        <Footer />

    </>);
}

export async function getServerSideProps(context) {

    const { req, res } = context

    const {cookies} = req

    return {
      props: {cookies}, // will be passed to the page component as props
    }
  }

export default withoutAuth(Login);