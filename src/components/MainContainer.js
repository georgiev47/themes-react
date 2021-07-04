import { ThemeContextProvider } from '../store/theme-context';
import { DeviceContextProvider } from '../store/device-context';
import PreviewScreen from './PreviewScreen';
import ThemeMenu from './ThemeMenu';
import DeviceButton from './DeviceButton';
import { useState } from "react";

function MainContainer() {
    const [popupMenuIsOpen, setModalIsOpen ] = useState(false);

    function popupMenuHandler() {
        setModalIsOpen(!popupMenuIsOpen);
    }

    return (
    <ThemeContextProvider>
        <DeviceContextProvider>
        <main>
            <div className="theme-menu-container">
                <div className="preview-devices">
                    <DeviceButton src='/img/Preview-Form-icons/Desktop.svg'  alt="desktop" />
                    <DeviceButton src='/img/Preview-Form-icons/Pad.svg'  alt="pad" />
                    <DeviceButton src='/img/Preview-Form-icons/Phone.svg'  alt="phone" />
                </div>
                <div className="main-menu">
                    <div className="theme" onClick={popupMenuHandler}>
                        <img src='/img/Main-Icons/Theme.svg' alt="theme" />
                        Theme
                        {popupMenuIsOpen && <ThemeMenu />}
                    </div>
                    <div className="form">
                        <img src='/img/Main-Icons/Form.svg' alt="form" />
                        Form
                    </div>
                    <div className="text">
                        <img src='/img/Main-Icons/Text new.svg' alt="text" />
                        Text
                    </div>
                    <div className="phone-field">
                        <img src='/img/Main-Icons/Phone Field.svg' alt="phone field" />
                        Phone Field
                    </div>
                    <div className="email-field">
                        <img src='/img/Main-Icons/Email Field.svg' alt="email field" />
                        Email Field
                    </div>
                    <div className="name-field">
                        <img src='/img/Main-Icons/Component 74 тАУ 713.svg' alt="name field" />
                        Name Field
                    </div>
                    <div className="button-field">
                        <img src='/img/Main-Icons/Button Field.svg' alt="button field" />
                        Button Field
                    </div>
                    <div className="checkbox">
                        <img src='/img/Main-Icons/Checkbox.svg' alt="checkbox" />
                        Checkbox
                    </div>
                    <div className="close-button">
                        <img src='/img/Main-Icons/Close Button.svg' alt="close button" />
                        Close Button
                    </div>
                    <div className="compliance">
                        <img src='/img/Main-Icons/Compliance.svg' alt="compliance" />
                        Compliance
                    </div>
                </div>
                <div className="next-form">
                    Next Form 1/4
                    <img src='/img/Arrow-NextForm-icon.svg' alt="arrow" />
                </div>
            </div>
            <PreviewScreen />
        </main>
        </DeviceContextProvider>
    </ThemeContextProvider>
    )
}

export default MainContainer;