import './../CSS/Container.css';
import spiderman from './../IMG/spiderman.png';
import batman from './../IMG/batman.png';
import Adam from './../IMG/projectAdam.png';
import morbius from './../IMG/morbius.png';
import cherry from './../IMG/cherry.png';
import eternal from './../IMG/eternal.png';

let Container = function (){
    return (
        <div className='container'>
            <div className='film'><img src={spiderman}/></div>
            <div className='film'><img src={Adam}/></div>
            <div className='film'><img src={morbius}/></div>
            <div className='film'><img src={batman}/></div>
            <div className='film'><img src={cherry}/></div>
            <div className='film'><img src={eternal}/></div>
        </div>
    );
};

export default Container;