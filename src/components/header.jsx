import './header.css';

function Header(){
    return(
        <>
            <div className="navbar">
                <div className="logo"><img src="/public/img/dc-logo.png" alt="dc-logo" /></div>
                <div className='nav'>
                    <div className="navlink"><a href="">character</a></div>
                    <div className="navlink" id='active'><a href="">comics</a></div>
                    <div className="navlink"><a href="">movies</a></div>
                    <div className="navlink"><a href="">tv</a></div>
                    <div className="navlink"><a href="">games</a></div>
                    <div className="navlink"><a href="">collectibles</a></div>
                    <div className="navlink"><a href="">videos</a></div>
                    <div className="navlink"><a href="">fans</a></div>
                    <div className="navlink"><a href="">news</a></div>
                    <div className="navlink"><a href="">shop</a></div>
                </div>
            </div>
        </>

    )
}

export default Header;