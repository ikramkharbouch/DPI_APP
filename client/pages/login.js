import Menu from '../components/Menu'
import Image from 'next/image'
import medicalRecord from '../public/dossier-medical.svg'

const Login = () => {
    return (<>
        <div className="h-screen">
            <Menu />
            <div className="w-5/6 lg:w-11/12 h-4/6 lg:h-3/4 bg-white mx-auto mt-10 lg:mt-20 rounded-lg flex flex-col lg:flex-row justify-between items-center px-4 lg:px-32 gap">
                <div className="hidden lg:block w-1/2"><Image src={medicalRecord} width={1000}
                    height={1000} layout="intrinsic" alt="Picture of the medical record" /></div>
                <div className="w-full lg:w-96 h-5/6 lg:h-3/6 lg:bg-gray-200 rounded-lg mx-auto text-center">
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