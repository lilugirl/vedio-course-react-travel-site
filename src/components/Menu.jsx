import MenuItem from "./MenuItem";
import {CONTENT_INFO} from '../data';

const Menu=({setCurrentIndex})=>{
    return <section className="aside-menu">
        {Object.keys(CONTENT_INFO).map((item,index)=>{
            return <MenuItem index={index} title={item} setCurrentIndex={setCurrentIndex} />
        })}
   
 </section>
}

export default Menu;