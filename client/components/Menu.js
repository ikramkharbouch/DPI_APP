import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Menu = ({ showMenu }) => {

    return (<>
        <div className="w-5/6 lg:w-11/12 bg-white h-20 mx-auto mt-20 rounded-lg flex justify-between items-center text-center">
            <h1 className="text-xl lg:text-3xl text-blue-500 flex-start font-bold ml-10 md:ml-20 lg:ml-20">DPI APP</h1>
            {/* <ul className="items-center justify-around text-gray-500 font-medium px-5 hidden lg:flex">
                <Link href="/home"><a className="mr-4">Accueil</a></Link>
                <Link href="/about"><a className="mr-4">A propos de nous</a></Link>
                <Link href="/help"><a className="">Aide</a></Link>
            </ul> */}
            <div className="hidden lg:flex flex-end items-center mr-20">
                <Link href="/register"><a><button className="mr-4 text-blue-400 font-medium">S'inscrire</button></a></Link>
                <Link href="/login"><a><button className="bg-blue-500 px-5 py-3 rounded-md text-white font-bold">S'identifier</button></a></Link>
            </div>
            <FontAwesomeIcon icon={faBars} color="gray" onClick={showMenu} size="lg" className='block lg:hidden mr-10 md:mr-20 lg:mr-20 cursor-pointer' />
        </div>
    </>);
}

export default Menu;
