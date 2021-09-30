import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Card = ({classnames, Message, iconColor}) => {

    const [isHidden, setIsHidden] = useState("flex")

    const handleClose = () => {
        setIsHidden("hidden")
    }

    return ( <>
        <div className={`${classnames} ${isHidden} w-3/4 mt-10 justify-between px-10 font-bold rounded-lg text-center py-4 border-2`}>
            <p>{Message}</p>
            <FontAwesomeIcon icon={faTimes} color={iconColor} onClick={handleClose} size="lg" className="cursor-pointer"/>
        </div>
    </> );
}
 
export default Card;