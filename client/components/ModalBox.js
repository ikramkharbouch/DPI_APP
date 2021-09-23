import { useState } from 'react';
import Input from './Input'

const ModalBox = ({ classnames }) => {

    const [Tags, setTags] = useState([]);
    const [Tag, setTag] = useState("")
    const [tagsNumber, setTagsNumber] = useState(0)

    const KeyPressHandler = (e) => {
        const Keycode = e.which
        if (Keycode === 13) {
            setTag(e.target.value)
            setTags([...Tags, Tag])
            setTagsNumber(tagsNumber + 1)
        }
    }

    const ChangeHandler = (e) => {
        setTag(e.target.value);
    }


    const [numberRegion, setNumberRegion] = useState('+212')
    return (<>
        <div className={`${classnames} text-3xl text-center bg-white h-3/6 w-5/6 z-10 rounded mx-auto shadow-2xl absolute ml-auto mr-auto left-0 right-0 mt-14`}>
            <h1 className="text-gray-600 text-xl mt-10 font-bold">Add patient</h1>
            <div className="mx-auto text-center">
                <form className="flex flex-col flex-wrap mx-auto">
                    <div className="px-10 flex gap-2 lg:gap-10 mx-auto pt-10 w-full">
                        <Input type="text" label="First Name" placeholder="Ikram" classnames="" />
                        <Input type="text" label="Middle Name" placeholder="Aicha" classnames="" />
                        <Input type="text" label="Last Name" placeholder="Kharbouch" classnames="" />
                        <Input type="date" label="Birth Date" placeholder="29-10-1998" classnames="" />
                    </div>
                    <div className="px-10 flex gap-2 lg:gap-10 mx-auto pt-10 w-full">
                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Marital status</label>
                            <select className="py-2 mt-5 lg:py-5 rounded border text-sm w-40 text-gray-400">
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Nationality</label>
                            <select className="py-2 mt-5 lg:py-5 rounded border text-sm w-40 text-gray-400">
                                <option value="single">Morocco</option>
                                <option value="married">France</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">City</label>
                            <select className="py-2 mt-5 lg:py-5 rounded border text-sm w-40 text-gray-400">
                                <option value="single">Fes</option>
                                <option value="married">Casablanca</option>
                            </select>
                        </div>
                    </div>
                    <div className="px-10 flex gap-2 lg:gap-10 mx-auto pt-10 w-full">

                        <div className="flex flex-col">
                            <label className="text-xs text-blue-500 font-bold absolute">Phone Number</label>
                            <div className="w-12 h-5 bg-yellow-200 text-yellow-400 relative top-7 lg:top-10 left-5 text-xs rounded-full font-bold">{numberRegion}</div>
                            <input type="number" className="py-2 lg:py-5 rounded border text-sm w-60" placeholder="0655481976..." />
                        </div>

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Blood Type</label>
                            <select className="py-2 mt-5 lg:py-5 rounded border text-sm w-40 text-gray-400">
                                <option value="single">AB+</option>
                                <option value="married">A+</option>
                                <option value="married">B+</option>
                                <option value="married">O+</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs text-blue-500 absolute font-bold">Covid19 Vaccinated</label>
                            <select className="py-2 mt-5 lg:py-5 rounded border text-sm w-40 text-gray-400">
                                <option value="single">No</option>
                                <option value="married">Yes</option>
                            </select>
                        </div>
                    </div>

                    <div className="px-10 flex gap-2 lg:gap-10 mx-auto pt-10 w-full">
                        <Input type="date" label="Vaccination Date" placeholder="29-10-1998" classnames="" />
                        <div className="flex flex-col w-4/5">
                            <label className="text-xs font-bold text-left text-blue-500">Medical Antecedents</label>
                            <div className="input border flex items-center w-full rounded h-10 lg:h-16 self-end mt-1">
                                <ul className="text-sm flex flex-wrap">
                                    {Tags.map((tag) => <li className="bg-green-100 py-1 px-4 rounded-full border text-green-400 font-bold border-green-400 ml-2">#{tag}</li>)}
                                </ul>
                                {(tagsNumber < 3) && <input type="text" placeholder="Enter here..." className="text-sm ml-5" value={Tag} onChange={ChangeHandler} onKeyPress={KeyPressHandler} />}
                            </div>
                        </div>

                    </div>
                    <input type="submit" className="w-1/6 bg-green-400 text-sm lg:text-lg py-2 lg:py-4 text-white font-bold rounded ml-10 mt-5" />
                </form>
            </div>
        </div>
    </>);
}

export default ModalBox;