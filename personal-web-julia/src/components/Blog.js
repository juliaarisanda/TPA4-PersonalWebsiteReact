import React, {useEffect} from 'react'
import UIUX from '../assets/img/uiux.png'
import WebDev from '../assets/img/pexel.jpg'
import CV from '../assets/img/cv.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Blog() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, []);
    return(
        <div className='blog p-5' id='blog'>
            <div className='blogText'>
                <h3>Blog Article <span>Collection</span></h3> <br /> <hr />
            </div> 
            <div className='container text-center mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="flip-right">
                        <div className="card text-dark">
                            <img src={UIUX} className="card-img-top" alt="UIUX" />
                            <div className="card-body">
                                <h5 className="card-title">UI UX Design</h5>
                                <p className="card-text">Seperti apa sih Tips & Trick untuk membuat sebuah UI/UX Design itu? Semua nya akan dibahas disini!</p>
                                <a href="https://kreativv.com/7-tips-belajar-ui-ux-design-newbie-wajib-tahu/" className="btn">More Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="zoom-in">
                        <div className="card text-dark">
                            <img src={WebDev} className="card-img-top" alt="Web Dev" />
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">Informasi mengenai metrik semua nya akan dibahas disini!</p>
                                <a href="https://glints.com/id/lowongan/metrik-untuk-website/#.Yz0tx3bP25c" className="btn">More Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-4' data-aos="flip-left">
                        <div className="card text-dark">
                            <img src={CV} className="card-img-top" alt="CV" />
                            <div className="card-body">
                                <h5 className="card-title">Curiculum Vitae</h5>
                                <p className="card-text">Struktur, tips, contoh, plus template CV freelance lengkap disini!</p>
                                <a href="https://glints.com/id/lowongan/contoh-cv-freelance/#.Yz0zJ3bP25c" className="btn">More Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;