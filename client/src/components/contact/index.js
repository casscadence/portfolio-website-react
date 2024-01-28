import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faNoteSticky } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope as faEnvelope2, faGripLines } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faDiscord,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Contact = ({scrollPercent, setScrollPercent}) => {
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const [letterAnim, setLetterAnim] = useState('letter-anim-hover')
  const [loaderName, setLoaderName] = useState('loader')
  const [inputCheck, setInputCheck] = useState(initialState)
  const [buttonClass, setButtonClass] = useState('')
  const [buttonPlaceholder, setButtonPlaceholder] = useState('SEND')
  const [contactMessage, setContactMessage] = useState('Failed to send the message, please try again')
  const [isDisabled, setIsDisabled] = useState(false)
  const scrollWindow = useRef()
  const topRef = useRef()
  const footerRef = useRef()
  const form = useRef()
  const { ref: inViewRef, inView } = useInView()

  useEffect(() => {
    setTimeout(() => {
      return setLoaderName('loader loader-end')
    }, 3000)
    document.title = 'Contact | Arielle Bartee'
    inViewRef(footerRef.current)
  }, [])

  useEffect(() => {
    topRef.current?.scrollIntoView({behavior: 'smooth'})
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000)
  }, [isDisabled])

  useEffect(() => {
    setTimeout(() => {
      return (
        setLetterAnim('letter-anim')
      )
    }, 3000)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if(buttonClass === 'valid'){
        setButtonClass('')
        setButtonPlaceholder('SEND')
      }
      else if(buttonClass.includes('invalid')){
        setButtonClass('')
        console.log('error')
      }
    }, 3000);
    return () => clearTimeout(timer)
  }, [buttonClass])

  useEffect(() => {
    window.addEventListener('resize', onScroll)
    return(() => {
        window.removeEventListener('resize', onScroll)
    })
  })

  const onScroll = () => {
    setScrollPercent((scrollWindow.current.scrollTop/(scrollWindow.current.scrollHeight - scrollWindow.current.clientHeight) * 100).toFixed())
  }

  const inputReady = (e) => {
    if(e.key === 'Backspace'){
      setInputCheck({
        ...inputCheck,
        [e.target.name]: `${e.target.value.length > 0 ? e.target.value : ''}`
      })
    }
    else{
      setInputCheck({
        ...inputCheck,
        [e.target.name]: e.target.value
      })
    }
  }

  const buttonValid = () => {
    setButtonClass('valid');
    setButtonPlaceholder('');
    setContactMessage('Message sent!')
    setInputCheck(initialState);
  }

  const buttonInvalid = () => {
    setButtonClass('invalid')
    setContactMessage('Failed to send the message, please try again')
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_h9vyx0n', 'template_5o0ubd8', form.current, 'BGwJHhD-eTvZpkrKu')
      .then(
        buttonValid,
        buttonInvalid
      )
  }

  return (
    <>
      <div ref={scrollWindow} className="container contact-page" onScroll={onScroll}>
        <div ref={topRef} className="text-zone">
          <div className='contact-wrapper'>
            <div className='contact-text'>
              <h1 className="letter-anim">
                Say Hello!
              </h1>
              <p className='desc-p'>
                Feel free to leave a message or get in touch through one of the contacts below
              </p>
              <div className='contact-email'>
                <p className='header-p'>Email</p>
                <p className='social-info'>
                  <a href="mailto:arielle.bartee@gmail.com"><strong>arielle.bartee@gmail.com</strong></a>
                </p>
              </div>
              <div className='contact-social'>
                <p className='header-p'>Social</p>
                <p className='social-info'><a href="https://linkedin.com/in/arielle-bartee"><FontAwesomeIcon icon={faLinkedin} /><strong className='social-brand'>LinkedIn </strong><strong>&#8212;</strong> linkedin.com/in/arielle-bartee</a></p>
                <p className='social-info'><a href="https://github.com/casscadence"><FontAwesomeIcon icon={faGithub} /><strong className='social-brand'>Github </strong><strong>&#8212;</strong> github.com/casscadence</a></p>
                <p className='social-info'><a href="https://discordapp.com/users/casscadence#3444"><FontAwesomeIcon icon={faDiscord} /><strong className='social-brand'>Discord </strong><strong>&#8212;</strong> casscadence#3444</a></p>
                <p className='social-info'><a href="https://join.skype.com/invite/eSqj1ldMJ7dH"><FontAwesomeIcon icon={faSkype} /><strong className='social-brand'>Skype </strong><strong>&#8212;</strong> arielle.bartee@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li>
                    <input
                      placeholder='Type here...'
                      type="text"
                      name='name' value={inputCheck.name}
                      onChange={inputReady} onKeyDown={inputReady}
                      required
                    />
                    <span className='border-bold'></span>
                    <span className='input-title'>Name</span>
                    <span className='input-icon'><FontAwesomeIcon icon={faUser} color="black"/></span>
                  </li>
                  <li>
                    <input
                      placeholder='Type here...'
                      type="email"
                      name="email"
                      value={inputCheck.email}
                      onChange={inputReady}
                      onKeyDown={inputReady}
                      required
                    />
                    <span className='border-bold'></span>
                    <span className='input-title'>Email</span>
                    <span className='input-icon'><FontAwesomeIcon icon={faEnvelope} color="black"/></span>
                  </li>
                  <li>
                    <input
                      placeholder='Type here...'
                      type="text"
                      name="subject"
                      value={inputCheck.subject}
                      onChange={inputReady}
                      onKeyDown={inputReady}
                      required
                    />
                    <span className='border-bold'></span>
                    <span className='input-title'>Subject</span>
                    <span className='input-icon'><FontAwesomeIcon icon={faGripLines} color="black"/></span>
                  </li>
                  <li>
                    <textarea
                      placeholder='Type here...'
                      name="message"
                      value={inputCheck.message}
                      onChange={inputReady}
                      onKeyDown={inputReady}
                      required
                    ></textarea>
                    <span className='border-bold'></span>
                    <span className='textarea-title'>Message</span>
                    <span className='textarea-icon'><FontAwesomeIcon icon={faNoteSticky} color="black"/></span>
                  </li>
                  <div className='button-transform-container'>
                      <button className={`button-border ${buttonClass}`} type="submit">
                        <span><FontAwesomeIcon icon={faEnvelope2} color="blue" /></span>
                        <div className='button-fill'>
                          <p className='button-border-link'>{buttonPlaceholder}</p>
                        </div>
                        <p className='contact-message'>{contactMessage}</p>
                      </button>
                      
                  </div>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <footer ref={footerRef} id='footer' className='footer'>
          AB Portfolio - 2023 © Arielle Bartee
        </footer>
      </div>
    </>
  )
}

export default Contact