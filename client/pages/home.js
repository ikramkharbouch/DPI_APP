import LoggedinMenu from '../components/LoggedinMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus, faCalendar } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (<>
        <div className="h-screen">
            <LoggedinMenu />
            <div className="w-5/6 lg:w-11/12 h-3/5 lg:h-3/4 bg-white mx-auto mt-4 lg:mt-20 rounded-lg items-center lg:px-32 gap">
                <div className="pt-10 w-11/12 flex mx-auto text-center justify-between items-center">
                    <form className="w-full ml-0">
                        <input type="text" placeholder="search" className="border w-5/6 lg:px-20 py-4 rounded-lg float-left" />
                        <FontAwesomeIcon icon={faSearch} color="gray" size="lg" className="relative right-16 md:right-24 lg:right-52  mt-5" />
                    </form>
                    <div className="mr-20 mx-auto lg:mx-0 hidden lg:flex">
                        <button className="px-4 py-2 lg:px-7 lg:py-4 rounded bg-green-300 text-white font-bold mr-5 mt-5 lg:mt-0">Add Patient</button>
                        <button className="px-4 py-2 lg:px-7 lg:py-4 rounded bg-blue-300 text-white font-bold">Set Calendar</button>
                    </div>

                    <div className="flex lg:hidden gap-2 mx-auto mr-auto">
                        <div className="bg-green-300 w-16 h-16 rounded-full text-center"><FontAwesomeIcon icon={faPlus} color="white" size="lg" className="mt-5" /></div>
                        <div className="bg-blue-400 w-16 h-16 rounded-full text-center"><FontAwesomeIcon icon={faCalendar} color="white" size="lg" className="mt-5" /></div>
                    </div>

                </div>
            </div>
        </div>

    </>);
}

export default Home;