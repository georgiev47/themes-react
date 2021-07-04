import classes from './ThemeMenu.module.css';
import ThemeCard from './ThemeCard';

function ThemeMenu() {
    return (
        <div className={classes['theme-menu']}>
            <ThemeCard src='/img/Forms-Previews/d-1.svg' steps='2' />
            <ThemeCard src='/img/Forms-Previews/68762bb7a84db417b7163333a8f22688.svg' steps='3' />
            <ThemeCard src='/img/Forms-Previews/ed-1.svg' steps='2' />
            <ThemeCard src='/img/Forms-Previews/Component 80 тАУ 188.svg' steps='4' />
            <ThemeCard src='/img/Forms-Previews/asset-1.svg' steps='2' />
            <ThemeCard src='/img/Forms-Previews/49a406b43f070ca5ce59d6d235a8bf9e.svg' steps='3' />
            <ThemeCard src='/img/Forms-Previews/3ead4b932b47c63ed49588b37587bd9a.svg' steps='3' />
            <ThemeCard src='/img/Forms-Previews/a706bc0e24b207bcc3295e098a576e23.svg' steps='4' />
        </div>
    )
}

export default ThemeMenu;