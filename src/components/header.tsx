import mock from '@/utils/mock';

export const Header = () => {
    return (
        <header
            id='header'
            className='top-0 z-10 backdrop-blur sticky'
        >
            <nav className="">
                <div className="flex justify-between mx-10">
                    <a href="/" className="flex items-center px-4 py-1 rounded-b-lg shadow-lg shadow-red-300 bg-red-400">
                        <img src="/logo.png" className="h-8 mr-2" alt="Logo" />
                        <span className="self-center text-2xl font-semibold text-white">Cats</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center 
                        text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">

                    </button>
                    <div className="hidden w-full md:block md:w-auto rounded-md shadow-lg shadow-red-300" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:mt-0 md:border-0">
                            {mock.menu.map((menu, index) => (
                                <li key={index} className={`${menu.bgcolor ? menu.bgcolor : ''} rounded-bl-lg`}>
                                    <a href={menu.link} className={`${menu.textcolor} block py-4 px-8 text-center rounded-bl-lg hover:bg-red-400 hover:text-white hover:rounded-br-lg hover:transition-opacity duration-500`} aria-current="page">{menu.nome}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}