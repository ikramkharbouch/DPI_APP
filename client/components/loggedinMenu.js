import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Menu = ({ showMenu }) => {

    return (<>
        <div className="w-5/6 lg:w-11/12 bg-white h-20 mx-auto mt-20 rounded-lg flex justify-between items-center text-center">
            <h1 className="text-3xl text-blue-500 flex-start font-bold">DPI APP</h1>
            <ul className="items-center justify-around text-gray-500 font-medium px-5 hidden lg:flex">
                <Link href="/home"><a className="mr-4">Accueil</a></Link>
                <Link href="/about"><a className="mr-4">A propos de nous</a></Link>
                <Link href="/help"><a className="">Aide</a></Link>
            </ul>
            <div className="hidden lg:flex flex-end items-center">
                <Link href="/logout"><a><button className="mr-4 text-blue-400 font-medium"></button></a></Link>
            </div>
            <FontAwesomeIcon icon={faBars} color="gray" onClick={showMenu} size="lg" className='block lg:hidden' />
        </div>
    </>);
}

export default Menu;
