import { useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hashtag from './Hashtag'


const ModalBox = ({ classnames, closeBox }) => {

    const [Tags, setTags] = useState([]);
    const [Tag, setTag] = useState("")
    const [tagsNumber, setTagsNumber] = useState(0)
    const [block, setBlock] = useState("block")


    // Inputs

    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [nationality, setNationality] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [bloodType, setBloodType] = useState("")
    const [vaccinated, setVaccinated] = useState(false)
    const [vaccinationDate, setVaccinationDate] = useState()
    const [medicalAntecedents, setMedicalAntecedents] = useState(Tags)

    const KeyPressHandler = (e) => {
        const Keycode = e.which
        if (Keycode === 13) {
            setTag(e.target.value)
            if (!Tags.includes(Tag) && Tag.length <= 12) {
                setTags([...Tags, Tag])
                setTagsNumber(tagsNumber + 1)
            }
        }
    }

    const ChangeHandler = (e) => {
        setTag(e.target.value)
    }

    const handleCloseTag = (e) => {
        e.preventDefault()
        console.log("Tag closed")
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        console.log(e.which)
        if (e.which === 13) {
            console.log("I won't handle the form")
        }
        else {

            // Fetch the api in here

            const data = { firstName, middleName, lastName, birthDate, maritalStatus, nationality, phoneNumber, bloodType, vaccinated, vaccinationDate, medicalAntecedents }

            const res = await fetch('http://localhost:8000/patient/add', {
                method: 'POST',
                body: JSON.stringify(data),
                credentials: 'include'
            })

            const formattedRes = await res.json()

            if (res.status === 200) {
                console.log("Patient was added successfully")
                console.log(formattedRes)
            }
        }
    }

    const removeTag = (e) => {
        var Element = e.target.parentElement
        var poppedTag = Element.id

        const newTags = Tags.filter((tag) => tag !== poppedTag)

        Element.remove()

        setTags(newTags)
    }


    const [numberRegion, setNumberRegion] = useState('+212')

    return (<>
        <div className={`${classnames} text-3xl text-center bg-white h-screen mb-10 md:h-3/6 lg:h-3/5 w-5/6 z-10 rounded mx-auto shadow-2xl absolute ml-auto mr-auto left-0 right-0 mt-14`}>
            <FontAwesomeIcon icon={faTimes} color="red" onClick={closeBox} size="xs" className='cursor-pointer float-right mr-10 mt-5' />
            <h1 className="text-gray-600 text-xl mt-10 font-bold">Add patient</h1>
            <div className="mx-auto text-center">
                <form className="flex flex-col flex-wrap mx-auto" onSubmit={SubmitHandler} >
                    <div className="px-10 flex flex-col md:flex-row lg:flex-row gap-4 lg:gap-10 mx-auto pt-10 w-full">

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Prénom</label>
                            <input type="text" placeholder="Ikram" className="py-2 mt-4 lg:py-5 rounded border text-sm md:w-40 lg:w-40 w-full pl-4" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Deuxième nom</label>
                            <input type="text" placeholder="Aicha" className="py-2 mt-4 lg:py-5 rounded border text-sm md:w-40 lg:w-40 pl-5 w-full" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                        </div>

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Nom de famille</label>
                            <input type="text" placeholder="Kharbouch" className="py-2 mt-4 lg:py-5 rounded border text-sm md:w-40 lg:w-40 pl-5 w-full" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Birth Date</label>
                            <input type="date" className="py-2 mt-4 lg:py-5 rounded border text-sm md:w-40 lg:w-40 w-full" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="px-10 flex flex-col md:flex-row lg:flex-row gap-4 lg:gap-10 mx-auto pt-10 w-full">
                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">État civil</label>
                            <select className="py-2 mt-4 lg:py-5 rounded border text-sm md:w-40 lg:w-40 w-full" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Nationalité</label>
                            <select className="py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-40 lg:w-40" value={nationality} onChange={(e) => setNationality(e.target.value)}>
                                <option value="single">Morocco</option>
                                <option value="married">France</option>
                            </select>
                        </div>

                    </div>
                    <div className="px-10 flex flex-col md:flex-row lg:flex-row gap-4 lg:gap-10 mx-auto pt-10 w-full">

                        <div className="flex flex-col">
                            <label className="text-xs text-blue-500 font-bold absolute">Numéro de téléphone</label>
                            <div className="w-12 h-5  bg-yellow-200 text-yellow-400 relative top-10 lg:top-7 left-5 text-xs rounded-full font-bold">{numberRegion}</div>
                            <input type="text" className="py-2 lg:py-5 rounded border text-sm w-60 pl-10" placeholder="0655481976..." id="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Groupe sanguin</label>
                            <select className="py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-40 lg:w-40 pl-3" value={bloodType} onChange={(e) => setBloodType(e.target.value)}>
                                <option value="single">AB+</option>
                                <option value="married">A+</option>
                                <option value="married">B+</option>
                                <option value="married">O+</option>
                                <option value="married">AB-</option>
                                <option value="married">A-</option>
                                <option value="married">B-</option>
                                <option value="married">O-</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Covid19 vacciné</label>
                            <select className="py-2 mt-4 lg:py-5 rounded border text-sm w-full md:w-40 lg:w-40 pl-3" value={vaccinated} onChange={(e) => { if (vaccinated === "Yes") setVaccinated(true); else if (vaccinated === "No") setVaccinated(false) }}>
                                <option value="single">No</option>
                                <option value="married">Yes</option>
                            </select>
                        </div>
                    </div>

                    <div className="px-10 flex flex-col md:flex-row lg:flex-row gap-4 lg:gap-10 mx-auto pt-10 w-full">
                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Date de vaccination</label>
                            <input type="date" className="py-2 mt-4 lg:py-5 rounded border text-sm md:w-40 lg:w-40 pl-3 w-full" />

                        </div>
                        
                        <div className="flex flex-col w-full md:w-4/5 lg:w-4/5">
                            <label className="text-xs font-bold text-left text-blue-500">Antécédents médicaux</label>
                            <div className="input border flex items-center w-full rounded h-10 lg:h-10 self-end mt-2">
                                <ul className="text-sm flex flex-wrap gap-2">
                                    {Tags.map((tag) => <div className="flex"><li key={tag} id={tag} className="bg-green-100 px-6 md:py-1 rounded-full border text-green-400 font-bold border-green-400 ml-2 text-xs">#{tag}<FontAwesomeIcon key={tag} id={tag} icon={faTimes} color="gray" onClick={removeTag} size="sm" className='ml-1 absolute mt-0.5 cursor-pointer' /></li></div>)}
                                </ul>
                                {(tagsNumber < 5) && <input type="text" placeholder="Enter here..." className="text-sm" value={Tag} onChange={ChangeHandler} onKeyPress={KeyPressHandler} />}
                            </div>
                        </div>

                        <div className="flex flex-col w-full md:w-4/5 lg:w-4/5">
                            <label className="text-xs font-bold text-left text-blue-500">Antécédents chirurgicaux</label>
                            <div className="input border flex items-center w-full rounded h-10 lg:h-10 self-end mt-2">
                                <ul className="text-sm flex flex-wrap gap-2">
                                    {Tags.map((tag) => <div className="flex"><li key={tag} id={tag} className="bg-green-100 px-6 md:py-1 rounded-full border text-green-400 font-bold border-green-400 text-xs">#{tag}<FontAwesomeIcon key={tag} id={tag} icon={faTimes} color="gray" onClick={removeTag} size="sm" className='ml-1 absolute mt-0.5 cursor-pointer' /></li></div>)}
                                </ul>
                                {(tagsNumber < 5) && <input type="text" placeholder="Enter here..." className="text-sm ml-2" value={Tag} onChange={ChangeHandler} onKeyPress={KeyPressHandler} />}
                            </div>
                        </div>
                        <Hashtag Tags={Tags} Tag={Tag} ChangeHandler={ChangeHandler} KeyPressHandler={KeyPressHandler} tagsNumber={tagsNumber}/>
                    </div>
                    <input type="submit" className="w-3/6 md:w-2/6 lg:w-1/6 bg-green-400 text-sm lg:text-lg py-2 lg:py-4 text-white font-bold rounded ml-10 mt-5" />
                </form>
            </div>
        </div>
    </>);
}

export default ModalBox;