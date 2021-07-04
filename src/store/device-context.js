import { createContext, useState } from "react";

const DeviceContext = createContext({
    device: ''
});

export function DeviceContextProvider(props) {
    const [userDevice, setUserDevice] = useState('desktop');

    function selectDeviceHandler(selectedDevice) {
        setUserDevice(selectedDevice);
    }

    function deviceIsSelectedHandler(device) {
        return (userDevice === device);
    }

    const context = {
        device: userDevice,
        selectDevice: selectDeviceHandler,
        isSelected: deviceIsSelectedHandler
    };

    return <DeviceContext.Provider value={context}>
        {props.children}
    </DeviceContext.Provider>
}

export default DeviceContext;