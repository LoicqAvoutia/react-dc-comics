import './body.css';;

function Body(props){
    return(
        <>
            <div className="body">
                <div className="upperbody">
                </div>
                <div className="underbody">
                    <section className='catalogo'>
                        {props.comics.map(com=>(
                            <article key={com.id} className='catalog-link'>
                                <img src={com.thumb} alt="thumb" />
                                <h3>{com.title}</h3>
                            </article>
                        ))}
                    </section>
                    <button>lead more</button>
                </div>
            </div>
        </>
    )
}

export default Body;