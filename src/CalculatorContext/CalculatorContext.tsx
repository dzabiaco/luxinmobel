import { createContext, useState } from 'react';

const ClosetContext = createContext({
    width: 2.0,
    height: 2.0,
    depth: 1.0,
    doorStyle: 'coupe',
    drawers: 'need',
    address: '',
    phone: '',
    setWidth: (width) => {},
    setHeight: (height) => {},
    setDepth: (depth) => {},
    setDoorStyle: (value) => {},
    setDrawers: (value)=> {},
    setAddress: (value) => {},
    setPhone: (value) => {}

});

export function ClosetContextProvider(props){

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [depth, setDepth] = useState<number>(0);
    const [doorStyle, setDoorStyle] = useState<string>('');
    const [drawers, setDrawers] = useState<boolean>(false);
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    function setWidthHandler(width){
        setWidth(width);
    }

    function setHeightHandler(height){
        setHeight(height);
    }

    function setDepthHandler(depth){
        setDepth(depth);
    }

    function setDoorStyleHandler(value){
        setDoorStyle(value);
    }

    function setDrawersHandler(value){
        setDrawers(value);
    }

    function setAddressHandler(value){
        setAddress(value);
    }

    function setPhoneHandler(value){
        setPhone(value);
    }


    const context = {
        width,
        height,
        depth,
        doorStyle,
        drawers,
        address,
        phone,
        setWidth: setWidthHandler,
        setHeight: setHeightHandler,
        setDepth: setDepthHandler,
        setDoorStyle: setDoorStyleHandler,
        setDrawers: setDrawersHandler,
        setAddress: setAddressHandler,
        setPhone: setPhoneHandler
    };

    return <ClosetContext.Provider value={context as any}>
        {props.children}
    </ClosetContext.Provider>
}

export default ClosetContext;