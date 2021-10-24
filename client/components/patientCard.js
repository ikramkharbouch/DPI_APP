const Element = ({label, data}) => {
    return (
        <div className="flex flex-col flex-wrap">
            <label className="text-xs float-left">{label}</label>
            <div className="text-base bg-blue-200 border border-blue-500 px-10 rounded-lg mt-2"><p className="mt-3">{data}</p></div>
        </div>
    )
}

const patientCard = ({patientData}) => {
    return ( <>
    
        <Element label="Prénom" data={patientData.firstName}/>
        <Element label="Nom" data={patientData.lastName}/>
        <Element label="Nationalité" data={patientData.nationality}/>
        <Element label="Date de naissance" data={patientData.birthDate}/>
        <Element label="Statut" data={patientData.maritalStatus}/>
        <Element label="Numéro" data={patientData.nationality}/>
        <Element label="Type Sanguin" data={patientData.bloodType}/>
        <Element label="Vacciné" data={patientData.vaccinated  ? 'Oui' : 'Non'}/>
        <Element label="Date de vaccination" data={patientData.vaccinationDate}/>
    
    </> );
}
 
export default patientCard;