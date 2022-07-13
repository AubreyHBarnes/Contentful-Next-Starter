

export default function Contact() {
    return (
        <>
            <section>
                <form method="post" action="#">
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="3"></textarea>
                        </div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" /></li>
                    </ul>
                </form>
            </section>
            <section className="split contact">
                <section className="alt">
                    <h3>Location</h3>
                    <p>Lafayette, LA</p>
                </section>
                <section>
                    <h3>Phone</h3>
                    <p><a href="tel:+12255739472">(225) 573-9472</a></p>
                </section>
                <section>
                    <h3>Email</h3>
                    <p><a href="mailto:aubrey.hbarnes@gmail.com">aubrey.hbarnes@gmail.com</a></p>
                </section>
                <section>
                    <h3>Social</h3>
                    <ul className="icons alt">
                        <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        {/* <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li> */}
                        <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                    </ul>
                </section>
            </section>
        </>
    );
}
