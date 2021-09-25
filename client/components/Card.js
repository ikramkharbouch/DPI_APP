import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Card = ({classnames, Message}) => {

    const handleClose = () => {

    }

    return ( <>
        <div className={`${classnames} w-3/4 mt-10 flex justify-between px-10 font-bold rounded-lg text-center py-4 text-red-400 border bg-red-100 border-2 border-red-300`}>
            <p>{Message}</p>
            <FontAwesomeIcon icon={faTimes} color="red" onClick={handleClose} size="lg" />
        </div>
    </> );
}
 
export default Card;