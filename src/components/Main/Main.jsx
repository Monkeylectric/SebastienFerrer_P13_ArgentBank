import './Main.css';

function Main({children, className}) {
    return (
        <main className={className}>
            {children}
        </main>
    )
}

export default Main;