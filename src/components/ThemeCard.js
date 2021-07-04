import { useContext } from 'react';
import ThemeContext from '../store/theme-context';

function ThemeCard(props) {
    const themeCtx = useContext(ThemeContext);

    const isSelected = themeCtx.themeIsSelected(props.src);

    function selectTheme() {
        themeCtx.selectTheme(props.src);
    }

    return (
        <div onClick={selectTheme}>
            <div className={isSelected? 'card-selected' : 'card-not-selected'}>Selected</div>
            <img src={props.src} alt="Theme" />
            <br/>This form has <span>{props.steps} steps</span>
        </div>
    )
}

export default ThemeCard;