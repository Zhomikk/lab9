import './../CSS/New.css';
import ratingCherry from "../IMG/ratingCherry.png";
import cherry from "../IMG/cherry.png";
import ratingSpiderMan from "../IMG/ratingSpiderMan.png";
import spiderMan from "../IMG/spiderman.png";

let New = function (){
    return (
        <div className='content'>
            <div className='kino'>
                <div className='title'>
                    По наклонной (2021)
                    {/*<img src={ratingCherry}/>*/}
                </div>

                <div className='trailer'>
                    <img src={cherry}/>
                    <div className='info'>
                        <p>
                            Год выпуска: <a href='#'>2021</a> <br/>
                            Страна: <a href='#'>США</a><br/>
                            Жанр: <a href='#'>Новинки</a> / <a href='#'>Фильмы</a> / <a href='#'>Драма</a> / <a href='#'>Криминал</a><br/>
                            Продолжительность: 2:22<br/>
                            Премьера (РФ): 2021-02-27<br/><br/>
                            Качество: HD 1080p<br/><br/><br/>
                            Фильм "По наклонной" рассказывает про интересное путешествие юного героя из Огайо, встретивший у себя на пути красивую девушку, но имеет множество рисков потерять ее из-за различных проблем, а также жизненных трудностей. Вдохновленный романом-бестселлером, Том Холланд в главной роли, который не в ладах со здоровьем, бросил учебу, отслужил в Ираке как военный медик и держится только на...
                        </p>
                    </div>
                </div>
                <button>Смотреть онлайн</button>
            </div>

            <div className='kino'>
                <div className='title'>
                    Человек-паук: Нет пути домой (2021)
                    <img src={ratingSpiderMan}/>
                </div>

                <div className='trailer'>
                    <img src={spiderMan}/>
                    <div className='info'>
                        <p>
                            Год выпуска: <a href='#'>2021</a> <br/>
                            Страна: <a href='#'>США</a>, <a href='#'>Исландия</a><br/>
                            Жанр: <a href='#'>Новинки</a> / <a href='#'>Фильмы</a> / <a href='#'>Боевик</a> / <a href='#'>Приключение</a><br/>
                            Продолжительность: 2:28<br/>
                            Премьера (РФ): 2021-01-15<br/><br/>
                            Качество: BDRip 1080p<br/><br/>
                            Немного вернувшись назад, давайте вспомним: Питер Паркер боролся с Мистерио и в конце концов его победил. Наконец-то заполучил сердце Эм-Джем и теперь они состоят в замечательных, любовных отношениях. Но вот есть один маленький момент - теперь жизнь парня и миссия в роли человека паука находится под угрозой. Его лицо видел весь мир и ему больше незачем скрывать свою сущность. Чтобы дальше бороться со злом, Питер ищет нового наставника. Им является доктор Стивен Стрэндж – мастер мистических искусств.
                        </p>
                    </div>
                </div>
                <button>Смотреть онлайн</button>
            </div>
        </div>
    );
};

export default New;