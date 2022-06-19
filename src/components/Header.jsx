const Header=({open,setOpen})=>{
    return (<header>
        <a href="/">
            <div className="logo">Travel</div>
        </a>
        <div className={open?"menu-logo active":"menu-logo"} onClick={()=>{
            setOpen(!open)
        }}></div>
    </header>)
}

export default Header;