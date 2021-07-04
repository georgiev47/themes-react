import { useContext } from 'react';
import ThemeContext from '../store/theme-context';
import DeviceContext from '../store/device-context';
import classes from './PreviewScreen.module.css';

function PreviewScreen() {
    const themeCtx = useContext(ThemeContext);
    const deviceCtx = useContext(DeviceContext);

    return (
        <div className={classes['preview-screen-container']}>
            <div className={[classes['preview-screen'], classes[`width-${deviceCtx.device}`]].join(' ')}>
                <img src={themeCtx.themeUrl} alt="Preview Image" width="480" height="480" />
            </div>
        </div>
    )
}

export default PreviewScreen;