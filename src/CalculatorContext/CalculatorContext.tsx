import { createContext, useState } from 'react';

const ClosetContext = createContext({
    width: 2.0,
    height: 2.0,
    depth: 1.0,
    doorStyle: 'coupe',
    drawers: 'need',
    address: '',
    phone: '',
    setWidth: (width: any) => {},
    setHeight: (height: any) => {},
    setDepth: (depth:any) => {},
    setDoorStyle: (value:any) => {},
    setDrawers: (value:any)=> {},
    setAddress: (value:any) => {},
    setPhone: (value:any) => {}

});

export function ClosetContextProvider(props:any){

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [depth, setDepth] = useState<number>(0);
    const [doorStyle, setDoorStyle] = useState<string>('');
    const [drawers, setDrawers] = useState<boolean>(false);
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    function setWidthHandler(width:any){
        setWidth(width);
    }

    function setHeightHandler(height:any){
        setHeight(height);
    }

    function setDepthHandler(depth:any){
        setDepth(depth);
    }

    function setDoorStyleHandler(value:any){
        setDoorStyle(value);
    }

    function setDrawersHandler(value:any){
        setDrawers(value);
    }

    function setAddressHandler(value:any){
        setAddress(value);
    }

    function setPhoneHandler(value:any){
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