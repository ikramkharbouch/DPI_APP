import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from './Input'


const Calendar = ({ classnames, closeCalendar }) => {

    const SubmitHandler = () => {
        console.log("Submitted")
    }

    return (<>

        <div className={`${classnames} text-3xl text-center bg-white h-4/5 md:h-4/6 lg:h-3/6 w-5/6 z-10 rounded mx-auto shadow-2xl absolute ml-auto mr-auto left-0 right-0 mt-14`}>
            <FontAwesomeIcon icon={faTimes} color="red" onClick={closeCalendar} size="xs" className='cursor-pointer float-right mr-10 mt-5' />
            <h1 className="text-gray-600 text-xl mt-10 font-bold">Set Appointment</h1>
            <div className="mx-auto text-center">
                <form className="flex flex-col flex-wrap mx-auto" onSubmit={SubmitHandler}>
                    <div className="px-10 flex flex-col gap-6 lg:gap-10 mx-auto pt-10 w-4/5" >
                    <Input type="text" label="Appointment's title" placeholder="Ikram's appointment" classnames="w-full" />
                    <Input type="time" label="Timing" placeholder="Ikram" classnames="w-full pl-5" />
                    <Input type="submit" value="Set Appointment" classnames="w-2/6 md:w-1/6 lg:w-1/6 bg-green-400 text-sm lg:text-lg py-2 lg:py-3 text-white font-bold rounded mt-5 float-left" />
                    </div>
                </form>
            </div>
        </div>

    </>);
}

export default Calendar;