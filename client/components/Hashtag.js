import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Hashtag = ({Tags, Tag, ChangeHandler, KeyPressHandler, tagsNumber, removeTag}) => {

    return (<>
        <div className="flex flex-col w-full md:w-4/5 lg:w-4/5">
            <label className="text-xs font-bold text-left text-blue-500">Rubriques D'allergie</label>
            <div className="input border flex items-center w-full rounded h-10 lg:h-10 self-end mt-2">
                <ul className="text-sm flex flex-wrap gap-2">
                    {Tags.map((tag) => <div className="flex"><li key={tag} id={tag} className="bg-green-100 px-6 md:py-1 rounded-full text-green-400 font-bold border-0 text-xs">#{tag}<FontAwesomeIcon key={tag} id={tag} icon={faTimes} color="gray" onClick={removeTag} size="sm" className='ml-1 absolute mt-0.5 cursor-pointer' /></li></div>)}
                </ul>
                {(tagsNumber < 5) && <input type="text" placeholder="Enter here..." className="text-sm ml-2" value={Tag} onChange={ChangeHandler} onKeyPress={KeyPressHandler} />}
            </div>
        </div>
    </>);
}

export default Hashtag;