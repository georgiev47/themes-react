import { useContext } from 'react';
import DeviceContext from '../store/device-context';

function DeviceButton(props) {
    const deviceCtx = useContext(DeviceContext);

    const isSelected = deviceCtx.isSelected(props.alt);

    function selectDevice() {
        deviceCtx.selectDevice(props.alt);
    }

    return (
        <div onClick={selectDevice}>
            <img src={props.src} alt={props.alt} className={isSelected ? 'selected' : ''} />
        </div>
    )
}

export default DeviceButton;