import { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import Image from 'next/image'
import medicalRecord from '../public/dossier-medical.svg'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { useRouter } from 'next/router'
import NavBar from '../components/NavBar'
import { Container } from 'react-bootstrap'


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
        if (cookies['jwt']) {

            localStorage.setItem('jwt', cookies['jwt'])
        }
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
            router.push('/login')
            router.push('/home')
        }

        console.log(formattedRes)

    }

    return (<>
        <div className="h-screen">
            <NavBar />
            <div id="menu-items" className={`${hiddenMenu} text-white font-bold w-5/6 mt-4 h-48 rounded-lg mx-auto text-center my-auto`}>
                <ul className="p-2">
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto py-4 rounded mt-4 w-full">S'inscrire</li>
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto py-4 rounded mt-4 w-full">S'identifier</li>
                </ul>
            </div>
            <div className="w-5/6 lg:w-11/12 h-4/5 lg:h-screen bg-white mx-auto mt-4 lg:mt-20 rounded-lg flex flex-col items-center">
                {errorMsg && <Card Message={errorMsg} classnames="bg-red-100 text-red-400 border-red-300" iconColor="red" />}
                {successMsg && <Card Message={successMsg} classnames="bg-green-100 text-green-400 border-green-300" iconColor="green" />}
                <div className="w-1/2 mx-auto text-center mt-10"><Image src={medicalRecord} width={100}
                    height={100} layout="intrinsic" alt="Picture of the medical record" /></div>
                <div className="mt-5 lg:mt-10 w-full lg:w-3/5 h-3/6 lg:h-2/3 lg:bg-gray-200 rounded-lg mx-auto text-center">
                    <form className="max-w-full grid lg:mt-14 justify-items-stretch w-3/4 mx-auto text-center" onSubmit={handleSubmit}>

                        <input type="text" className="py-2 mt-4 pl-5 lg:py-5 rounded border lg:border-0" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" className="py-2 mt-4 pl-5 lg:py-5 rounded border lg:border-0" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button className="text-sm lg:text-base mt-4 font-medium text-blue-500 justify-self-end">Avez vous déjà un compte ?</button>

                        <input className="min-w-full lg:px-28 py-2 lg:py-5 rounded bg-blue-500 mt-5 font-bold text-white cursor-pointer" type="submit" value="S'identifier" />
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