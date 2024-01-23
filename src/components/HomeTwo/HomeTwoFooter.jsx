import React, { useState } from "react"

const FooterTwo = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

  const SubmitForm = async (e) => {

    e.preventDefault()
    if(!message) {
      return alert("Message is required")
    }
    if(message.length < 20) {
      return alert("Message should be contain at least 20 characters")
    }
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: {name, email, message, subject} }),
    });
    if(response.status == 203) {
      return alert('All feilds are required');
    }
    if (response.status == 200) {
      setEmail('')
      setMessage('')
      setName('')
      setSubject('')
      return alert('Thanks! Message sent successfully!');
    } else {
      alert('Something went wrong!');
    }
  }
  return (
    <>
      <footer>
        <div className="tpfooter-area box-plr-85">
          <div
            className="footer-contact-wrapper include-bg pt-115 pb-75"
            style={{ background: "#154c79" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer__widget footer-col-1">
                    <div className="tp-section-title">
                      <span className="tp-sub-title mb-15">Contact INfo</span>
                      <h2 className="tp-title tp-title-df mb-20">
                        Any Question?
                      </h2>
                      <p>
                        If you have any query feel free to contact with us
                        thanks
                      </p>
                    </div>
                    <div className="footer__lists mt-40">
                      {/* <div className="footer__list-item mb-40">
                        <div className="footer__list-icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="footer__list-text">
                          <p><a href="https://goo.gl/maps/iAY7xEk5PGbqwBWf6" target="blank">Ta-134/A, Gulshan Badda Link Rd,
                            Nya 10982 USA </a></p>
                        </div>
                      </div> */}
                      <div className="footer__list-item mb-40">
                        <div className="footer__list-icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="footer__list-text">
                          <p>
                            <a href="mailto:info@brainsees.com">
                              info@brainsees.com
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* <div className="footer__list-item mb-40">
                        <div className="footer__list-icon">
                          <i className="fa-solid fa-phone-flip"></i>
                        </div>
                        <div className="footer__list-text">
                          <p><a href="tel:+923410498631">+923410498631</a></p>
                          <p><a href="tel:+923445753129">+923445753129</a></p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer__widget footer-col-2">
                    <div className="tp-section-title">
                      <span className="tp-sub-title mb-15">Get In Touch</span>
                      <h2 className="tp-title tp-title-df mb-20">
                        Let’s Say Hi
                      </h2>
                    </div>
                    <form id="contact-form" onSubmit={SubmitForm}>
                      <div className="contact-filed mb-20">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          className="w-100 p-2"

                          value={name}
                          minLength={3}
                          onChange={(text) => setName(text.target.value)}
                        />
                      </div>
                      <div className="contact-filed mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Mail"
                          value={email}
                          className="w-100 p-2"
                          onChange={(email) => setEmail(email.target.value)}
                        />
                      </div>
                      <div className="contact-filed mb-20">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Enter Subject"
                          value={subject}
                          className="w-100 p-2"
                          minLength={3}
                          onChange={(text) => setSubject(text.target.value)}
                        />
                      </div>
                      <div className="contact-filed mb-25">
                        <textarea
                          placeholder="Enter your Massage"
                          name="message"
                          value={message}
                          className="w-100 p-2"

                          onChange={(message) => setMessage(message.target.value)}
                        ></textarea>
                      </div>
                      
                      <div className="form-submit">
                        <button className="tp-grd-btn" type="submit">
                          Send Massage
                        </button>
                      </div>
                      <p className="ajax-response"></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpcopyright-area text-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12">
                <div className="footer-copyright-text">
                  <p>© 2022 brainsees . All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterTwo
