import { createContext, useState } from 'react';

const KitchenContext = createContext({
    kitchenType: 'straight',
    kitchenFloors: '',
    kitchenStyle: '',
    address: '',
    phone: '',

    setWidth: (width: any) => {},
    setHeight: (height: any) => {},
    setDepth: (depth:any) => {},


    setKitchenType: (value: any) => {},
    setKitchenFloors: (value: any) => {},
    setKitchenStyle: (value: any) => {},
    setAddress: (value:any) => {},
    setPhone: (value:any) => {}

});

export function ClosetContextProvider(props:any){

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [depth, setDepth] = useState<number>(0);

    const [kitchenType, setKitchenType] = useState<string>('');
    const [kitchenFloors, setKitchenFloors] = useState<string>('');
    const [kitchenStyle, setKitchenStyle] = useState<string>('');


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




    function setKitchenTypeHandler(value:any){
        setKitchenType(value);
    }

    function setKitchenFloorsHandler(value:any){
        setKitchenFloors(value);
    }

    function setKitchenStyleHandler(value:any){
        setKitchenStyle(value);
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

        kitchenType,
        kitchenFloors,
        kitchenStyle,
        address,
        phone,
        setWidth: setWidthHandler,
        setHeight: setHeightHandler,
        setDepth: setDepthHandler,

        setKitchenType: setKitchenTypeHandler,
        setKitchenFloors: setKitchenFloorsHandler,
        setKitchenStyle: setKitchenStyleHandler,

        setAddress: setAddressHandler,
        setPhone: setPhoneHandler
    };

    return <KitchenContext.Provider value={context as any}>
        {props.children}
    </KitchenContext.Provider>
}

export default KitchenContext;