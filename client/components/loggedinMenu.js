import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const LoggedinMenu = ({ showMenu }) => {

    return (<>
        <div className="w-5/6 lg:w-11/12 bg-white h-20 mx-auto mt-20 rounded-lg flex justify-between items-center text-center">
            <h1 className="text-xl lg:text-3xl text-blue-500 flex-start font-bold ml-10 md:ml-20 lg:ml-20">DPI APP</h1>
            <div className="hidden lg:flex flex-end items-center mr-20">
                <Link href="/logout"><a><button className="bg-blue-500 px-5 py-3 rounded-md text-white font-bold">Se deconnecter</button></a></Link>
            </div>
            <FontAwesomeIcon icon={faBars} color="gray" onClick={showMenu} size="lg" className='block lg:hidden mr-10 md:mr-20 lg:mr-20' />
        </div>
    </>);
}

export default LoggedinMenu;