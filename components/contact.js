

export default function Contact() {
    return (
        <>
            <section>
                <form method="post" action="#">
                    <div class="fields">
                        <div class="field">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div class="field">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div class="field">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="3"></textarea>
                        </div>
                    </div>
                    <ul class="actions">
                        <li><input type="submit" value="Send Message" /></li>
                    </ul>
                </form>
            </section>
            <section class="split contact">
                <section class="alt">
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
                    <ul class="icons alt">
                        <li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="#" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
                        {/* <li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li> */}
                        <li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                    </ul>
                </section>
            </section>
        </>
    );
}
