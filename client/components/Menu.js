const Menu = () => {
    return (<>
        <div className="w-11/12 bg-white h-20 mx-auto mt-20 rounded-lg flex justify-around items-center">
            <h1 className="text-3xl text-blue-400 ml-20">DPI APP</h1>
            <ul className="flex items-center justify-around mr-20 text-gray-500 font-medium">
                <li className="mr-10">Accueil</li>
                <li className="mr-10">A propos de nous</li>
                <li className="">Aide</li>
            </ul>
            <div className="flex flex-end">
                <button className="mr-10 text-blue-400 font-medium">Button 1</button>
                <button className="bg-blue-300 px-5 py-3 rounded-md text-white font-bold">Button 2</button>
            </div>
        </div>
    </>);
}

export default Menu;
