import './../CSS/NavTop.css';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Main from "./Main";
import New from "./New";

let NavTop = function (props)
{
    return (
        <BrowserRouter>
            <div className='topnav'>
                <div className='types'><Link to='/main'>Главная</Link></div>
                <div className='types'><Link to='/new'>Новинки</Link></div>
                <div className='types'><Link to='/collections'>Подборки</Link></div>
                <div className='types'><Link to='/films'>Фильмы</Link></div>
                <div className='types'><Link to='/serials'>Сериалы</Link></div>
                <div className='types'><Link to='/dorams'>Дорамы</Link></div>
                <div className='types'><Link to='/anime'>Аниме</Link></div>
                <div className='types'><Link to='/topFilms'>Топ Фильмов</Link></div>
            </div>

            <Routes>

                <Route path='/new' element={<New />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default NavTop;