import {useEffect} from "react";
import Scrollbar from 'smooth-scrollbar';

const Scroll = () => {
    const Options ={
        damping: 0.07,
    }
    useEffect(() => {

        Scrollbar.init(document.querySelector('#main-component'),Options);
    }, []);
    
  return null;
};

export default Scroll;
