import LoggedinMenu from '../components/LoggedinMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus, faCalendar } from '@fortawesome/free-solid-svg-icons'
import ModalBox from '../components/ModalBox'
import { useState, useEffect } from 'react'
import withAuth from './auth/withAuth'
import Calendar from '../components/Calendar'
import { useRouter } from 'next/router'


const Home = () => {

    const router = useRouter()


    const [hiddenModal, setHiddenModal] = useState("hidden")
    const [hiddenCalendar, setHiddenCalendar] = useState("hidden")
    const [hiddenMenu, sethiddenMenu] = useState("hidden")

    const addPatient = () => {
        if (hiddenModal === "hidden")
            setHiddenModal("block")
        else if (hiddenModal === "block")
            setHiddenModal("hidden")
        console.log(hiddenModal)
    }

    const closeBox = () => {
        if (hiddenModal === "block")
            setHiddenModal("hidden")
        else if (hiddenModal === "hidden")
            setHiddenModal("block")
        console.log(hiddenModal)
    }

    const closeCalendar = () => {
        if (hiddenCalendar === "block")
            setHiddenCalendar("hidden")
        else if (hiddenCalendar === "hidden")
            setHiddenCalendar("block")
        console.log(hiddenCalendar)
    }

    const setAppointment = () => {
        if (hiddenCalendar === "block")
            setHiddenCalendar("hidden")
        else if (hiddenCalendar === "hidden")
            setHiddenCalendar("block")
        
    }

    const showMenu = () => {
        console.log("The menu icon was clicked")
        if (hiddenMenu === "hidden")
            sethiddenMenu("block");
        else
            sethiddenMenu("hidden")
    }

    const Logout = async () => {

        console.log("logout here")
        // To disconnect

        const res = await fetch('http://localhost:8000/user/logout', {
            method: 'POST',
            credentials: 'include'
        })

        const formattedRes = await res.json()

        console.log(formattedRes)
        localStorage.removeItem('jwt')
        router.push('/login')

    }

    return (<>
        <div className="h-screen mx-auto text-center relative">
            <LoggedinMenu showMenu={showMenu} Logout={Logout}/>
            <div id="menu-items" className={`${hiddenMenu} text-white font-bold w-5/6 mt-4 h-28 rounded-lg mx-auto text-center my-auto`}>
                <ul className="p-2">
                    <li className="hover:bg-gray-700 bg-blue-500 mx-auto py-4 rounded mt-4 w-full cursor-pointer" onClick={Logout}>Se déconnecter</li>
                </ul>
            </div>
            <ModalBox classnames={hiddenModal} onClick={addPatient} closeBox={closeBox} />
            <Calendar classnames={hiddenCalendar} closeCalendar={closeCalendar} />
            <div className="w-5/6 lg:w-11/12 h-3/5 lg:h-3/4 bg-white mx-auto flex flex-wrap flex-col mt-4 lg:mt-20 rounded-lg items-center lg:px-32 gap">
                <div className="pt-10 w-11/12 flex flex-wrap mx-auto text-center items-center">
                    <form className="w-full ml-0">
                        <input type="text" placeholder="search" className="border w-5/6 lg:px-20 py-4 rounded-lg pl-5" />
                        <FontAwesomeIcon icon={faSearch} color="gray" size="lg" className="relative right-16 md:right-24 lg:right-20 lg:mr-10 mt-5" />
                    </form>
                    <div className="mr-20 mx-auto lg:mx-0 hidden lg:flex mt-10">
                        <button className="px-4 py-2 lg:px-7 lg:py-2 rounded bg-green-300 text-white font-bold mr-5 mt-5 lg:mt-0" onClick={addPatient}>Add Patient</button>
                        <button className="px-4 py-2 lg:px-7 lg:py-2 rounded bg-blue-500 text-white font-bold" onClick={setAppointment}>Set Appointment</button>
                    </div>

                    <div className="flex lg:hidden gap-2 mx-auto mr-auto mt-10">
                        <div className="bg-green-300 w-16 h-16 rounded-full text-center"><FontAwesomeIcon icon={faPlus} color="white" size="lg" className="mt-5 cursor-pointer" onClick={addPatient} /></div>
                        <div className="bg-blue-500 w-16 h-16 rounded-full text-center"><FontAwesomeIcon icon={faCalendar} color="white" size="lg" className="mt-5 cursor-pointer" onClick={setAppointment}/></div>
                    </div>

                </div>
            </div>
        </div>

    </>);
}

export default withAuth(Home);