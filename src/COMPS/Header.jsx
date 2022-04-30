import './../CSS/header.css';

let Header = function (){
    return (
        <header>
            <div className='logo'>KINOGO</div>

            <div className='search'>
                <button id='login'>Вход</button>
                <button id='signup'>Регистрация</button>
                <input placeholder='Поиск'/>
                <button id='submit'>ок</button>
            </div>
        </header>
    );
};

export default Header;