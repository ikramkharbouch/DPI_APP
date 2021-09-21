const Menu = () => {
    return (<>
        <div className="w-5/6 lg:w-11/12 bg-white h-20 mx-auto mt-20 rounded-lg flex justify-around items-center text-center">
            <h1 className="text-3xl text-blue-500">DPI APP</h1>
            <ul className="flex items-center justify-around text-gray-500 font-medium px-5">
                <li className="mr-4">Accueil</li>
                <li className="mr-4">A propos de nous</li>
                <li className="">Aide</li>
            </ul>
            <div className="flex flex-end">
                <button className=" mr-4 text-blue-400 font-medium">S'inscrire</button>
                <button className="bg-blue-500 px-5 py-3 rounded-md text-white font-bold">S'identifier</button>
            </div>
        </div>
    </>);
}

export default Menu;
