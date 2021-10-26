import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Card from './Card'

const Calendar = ({ classnames, closeCalendar }) => {

    const [ipp, setIPP] = useState("")
    const [sojournNb, setSojournNb] = useState("")
    const [patientName, setPatientName] = useState("")
    const [title, setTitle] = useState("")
    const [day, setDay] = useState("")
    const [timing, setTiming] = useState("")
    const [doctor, setDoctor] = useState("")
    const [disease, setDisease] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")


    const resetValues = () => {
        setTitle("")
        setDay("")
        setTiming("")
    }

    const handleName = async (e) => {
        setPatientName(e.target.value)

        // now auto fill based on the name

        // fetch the api and get the ipp et le numero de sejour

        // const url = 'http://localhost:7000/v1/patient/' + patientName
        const res = await fetch('http://localhost:7000/v1/patients/' + patientName)

        const formattedRes = await res.json()

        console.log(formattedRes)
    }

    const SubmitHandler = async (e) => {

        e.preventDefault()

        const data = { title, day, timing }

        console.log(title)
        console.log(day)
        console.log(timing)

        // Fetch the api in here

        const res = await fetch('http://localhost:8000/appointment/add', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            credentials: 'include',
        })

        const formattedRes = await res.json()

        console.log(formattedRes)

        // Reset values here

        resetValues()

        if (res.status === 200) {
            setSuccessMsg("Appointment was set successfully")
        } else if (res.status !== 200) {
            setErrorMsg("Something went wrong")
        }
    }

    return (<>
        <div className={`${classnames} text-3xl text-center bg-white h-3/4 md:h-4/6 lg:h-full w-4/5 z-10 rounded mx-auto shadow-2xl absolute ml-auto mr-auto left-0 right-0 mt-14`}>
            {errorMsg && <Card Message={errorMsg} classnames="text-sm lg:text-base bg-red-100 text-red-400 border-red-300 mx-auto" iconColor="red" />}
            {successMsg && <Card Message={successMsg} classnames="text-sm lg:text-base bg-green-100 text-green-400 border-green-300 mx-auto" iconColor="green" />}
            <FontAwesomeIcon icon={faTimes} color="red" onClick={closeCalendar} size="xs" className='cursor-pointer float-right mr-10 mt-5' />
            <h1 className="text-gray-600 text-xl mt-10 font-bold">Set Appointment</h1>
            <div className="mx-auto text-center w-full">
                <form className="flex flex-col flex-wrap mx-auto w-full" onSubmit={SubmitHandler}>
                    <div className="px-10 flex flex-col gap-6 lg:gap-10 mx-auto pt-10 w-full" >
                        <div className="w-full ">
                            <label className="text-xs text-blue-500 absolute font-bold">Identifiant Patient Permanent</label>
                            <input type="text" placeholder="Identifiant Patient Permanent" className="pl-3 py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-2/3 lg:w-2/3" value={ipp} onChange={(e) => setIPP(e.target.value)} required />
                        </div>
                        <div className="w-full ">
                            <label className="text-xs text-blue-500 absolute font-bold">Numéro de séjour</label>
                            <input type="text" placeholder="Numéro de séjour" className="pl-3 py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-2/3 lg:w-2/3" value={sojournNb} onChange={(e) => setSojournNb(e.target.value)} required />
                        </div>
                        <div className="w-full ">
                            <label className="text-xs text-blue-500 absolute font-bold">Le nom du patient</label>
                            <input type="text" placeholder="Some random title" className="pl-3 py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-2/3 lg:w-2/3" value={patientName} onChange={handleName} required />
                        </div>
                        <div className="w-full ">
                            <label className="text-xs text-blue-500 absolute font-bold">Type du rendez-vous</label>
                            <input type="text" placeholder="Some random title" className="pl-3 py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-2/3 lg:w-2/3" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                        <div className="w-full">
                            <label className="text-xs text-blue-500 absolute font-bold">Jour</label>
                            <input type="date" placeholder="Ikram" className="py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-2/3 lg:w-2/3 pl-3.5" value={day} onChange={(e) => setDay(e.target.value)} required />
                        </div>
                        <div className="w-full">
                            <label className="text-xs text-blue-500 absolute font-bold">Heure</label>
                            <input type="time" placeholder="Ikram" className="py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-2/3 lg:w-2/3 pl-3.5" value={timing} onChange={(e) => setTiming(e.target.value)} required />
                        </div>
                        <div className="w-full">
                            <label className="text-xs text-blue-500 absolute font-bold">Nom du médecin</label>
                            <input type="text" placeholder="Nom du médecin" className="pl-3 py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-2/3 lg:w-2/3" value={doctor} onChange={(e) => setDoctor(e.target.value)} required />
                        </div>
                        <div className="w-full">
                            <label className="text-xs text-blue-500 absolute font-bold">Motif d'admission</label>
                            <input type="text" placeholder="Motif d'admission" className="pl-3 py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-2/3 lg:w-2/3" value={disease} onChange={(e) => setDisease(e.target.value)} required />
                        </div>
                        <input type="submit" className="bg-green-400 text-sm lg:text-lg py-2 lg:py-4 text-white font-bold rounded mt-4 cursor-pointer w-full md:w-1/3 lg:w-1/3 mx-auto" />
                    </div>
                </form>
            </div>
        </div>

    </>);
}

export default Calendar;