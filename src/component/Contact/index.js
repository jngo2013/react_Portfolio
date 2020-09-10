import React from 'react';

function Contact() {
  return(
    <div >
      <div className="container contact-form">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <section>
            <h1 className="display-4"> Contact</h1>
              <div></div><a href="https://github.com/jngo2013">Github</a>
            <form>
              <a href="https://www.linkedin.com/in/jimmyngo95/" target="">Linkedin</a>
              {/* <label for="name" style={{marginTop: '20px'}}>Name</label>
              <input className="form-control" />
              <label for="email" style={{marginTop: '20px'}}>Email</label>
              <input className="form-control" />
              <label for="message" style={{marginTop: '20px'}}>Message</label>
              <textarea className="form-control" rows="5"></textarea>
              <button style={{marginTop: '20px'}} className="btn btn-primary">Submit</button> */}
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact;