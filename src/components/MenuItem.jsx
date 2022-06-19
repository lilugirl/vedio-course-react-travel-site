const MenuItem=({title,index,setCurrentIndex})=>{
    return <span onClick={()=>{
        setCurrentIndex(index)
    }}>{title}</span>
}

export default MenuItem;