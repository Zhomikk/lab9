import './../CSS/Nav.css';

let Nav = function () {
    return(
        <nav>
            <div className='panel'>Панель навигации</div>

            <div className='categories'>
                <div><h3>Категории</h3></div>

                <button className='categ'>Все фильмы</button>
                <button className='categ'>Биографии</button>
                <button className='categ'>Боевики</button>
                <button className='categ'>Вестерны</button>
                <button className='categ'>Военные</button>
                <button className='categ'>Детективы</button>
                <button className='categ'>Детские</button>
                <button className='categ'>Документалки</button>
                <button className='categ'>Драмы</button>
                <button className='categ'>Исторические</button>
                <button className='categ'>Комедии</button>
                <button className='categ'>Криминал</button>
                <button className='categ'>Мелодрамы</button>
                <button className='categ'>Мультфильмы</button>
                <button className='categ'>Мюзиклы</button>
                <button className='categ'>Приключения</button>
                <button className='categ'>Семейные</button>
                <button className='categ'>Спортивные</button>
                <button className='categ'>Триллеры</button>
                <button className='categ'>Ужасы</button>
                <button className='categ'>Фантастика</button>
                <button className='categ'>Фэнтэзи</button>
            </div>
        </nav>
    );
};

export default Nav;