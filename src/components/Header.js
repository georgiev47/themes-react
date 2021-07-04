import classes from './Header.module.css';

function Header() {
    return <header className={classes.headercontainer}>
        <div className={classes.headerrow1}>
            <div className={classes.logo}>
                <div><img src='/img/SMSBump-Logo.svg' alt="Logo" /></div>
                <div><img src='/img/Top-Menu-Icons/Pen-icon.svg' alt="Pen" /> Form 1</div>
            </div>
            <div className={classes.exit}>
                <div>
                    <select>
                        <option>Draft</option>
                    </select>
                </div>
                <div><img src='/img/Top-Menu-Icons/Exit-icon.svg' alt="Exit" /> Exit</div>
            </div>
        </div>
        <div className={classes.headerrow2}>
            <div className={classes.leftbuttons}>
                <div>1.Design</div>
                <div>2.Behavior</div>
            </div>
            <div className={classes.centerbuttons}>
                <div>Form 1</div>
                <div>Success</div>
            </div>
            <div className={classes.rightbuttons}>
                <div className={classes.undoredo}>
                    <div>
                        <div><img src='/img/Top-Menu-Icons/Undo-icon.svg' alt="Undo" /></div>
                        <div>Undo</div>
                    </div>
                    <div>
                        <div><img src='/img/Top-Menu-Icons/Redo-icon.svg' alt="Redo" /></div>
                        <div>Redo</div>
                    </div>
                </div>
                <div className={classes.delete}>
                    <div><img src='/img/Top-Menu-Icons/trash-Icon.svg' alt="Delete" /></div>
                    <div>Delete Element</div>
                </div>
            </div>
        </div>
    </header>
}

export default Header;