import './footer.css';

function Footer(){
    return(
        <>
            <div className='merch'>
                <div className="merchlink">
                    <img src="/public/img/buy-comics-digital-comics.png" alt="buy-comics-digital-comics" />
                    <p>digital comics</p>
                </div>
                <div className="merchlink">
                    <img src="/public/img/buy-comics-merchandise.png" alt="buy-comics-merchandise" />
                    <p>dc merchandise</p>
                </div>
                <div className="merchlink">
                    <img src="/public/img/buy-comics-shop-locator.png" alt="buy-comics-shop-locator" />
                    <p>comics shop locator</p>
                </div>
                <div className="merchlink">
                    <img src="/public/img/buy-comics-subscriptions.png" alt="buy-comics-subscriptions" />
                    <p>subscriptions</p>
                </div>
                <div className="merchlink">
                    <img src="/public/img/buy-dc-power-visa.svg" alt="buy-dc-power-visa" />
                    <p>dc power visa</p>
                </div>

            </div>
            <div className='middlefooter'>
                <section className='links'>
                    <article className="catlinks">
                        <h3>DC COMICS</h3>
                        <ul>
                            <li>character</li>
                            <li>comics</li>
                            <li>movies</li>
                            <li>TV</li>
                            <li>games</li>
                            <li>viedos</li>
                            <li>news</li>
                        </ul>
                    </article>
                    <article className="catlinks">
                        <h3>SHOP</h3>
                        <ul>
                            <li>shop DC</li>
                            <li>shop DC collectibles</li>
                        </ul>
                    </article>
                    <article className="catlinks">
                        <h3>DC</h3>
                        <ul>
                            <li>terms of use</li>
                            <li>privacy polices new</li>
                            <li>AD choices</li>
                            <li>advertising</li>
                            <li>jobs</li>
                            <li>subscriptions</li>
                            <li>talent workshops</li>
                            <li>cpsc certificates</li>
                            <li>ratings</li>
                            <li>shop help</li>
                            <li>contact us</li>
                        </ul>
                    </article>
                    <article className="catlinks">
                        <h3>SITES</h3>
                        <ul>
                            <li>DC</li>
                            <li>mad magazine</li>
                            <li>DC kids</li>
                            <li>DC universe</li>
                            <li>DC power visa</li>
                        </ul>
                    </article>
                </section>
                <div className="bg-img">
                    <img src="./public/img/dc-logo-bg.png" alt="dc-logo-bg" />
                </div>
            </div>
            <div className='underfooter'>
                <button>sign-up now!</button>
                <div className='social'>
                    <h3>FOLLOW US</h3>
                    <img src="/public/img/footer-facebook.png" alt="" />
                    <img src="/public/img/footer-periscope.png" alt="" />
                    <img src="/public/img/footer-pinterest.png" alt="" />
                    <img src="/public/img/footer-twitter.png" alt="" />
                    <img src="/public/img/footer-youtube.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer;