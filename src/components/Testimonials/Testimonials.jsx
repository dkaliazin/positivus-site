import css from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Testimonials = ({headertitle,headertext,testimonialsBase}) => {
   
    return (
        <section className={css.testimon} id="testimonials">
            <div className={css.testimonheaderbox}>
                <h2 className={css.testimonheaderboxheader}>{headertitle}</h2>
                <p className={css.testimonheaderboxtext}>{headertext}</p>
            </div>

            <div className={css.testimonbox}>
                <Swiper 
                    className={css.testimonswiper}
                    wrapperClass={css.testimonwrapper}
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView="auto"
                    centeredSlides
                    loop
                    navigation
                    pagination={{ clickable: true }}
                >
                    {testimonialsBase.map(({id,text,name,job}) => (
                        <SwiperSlide key={id} className={css.swiperslide}>
                            <span className={css.rectangle}>
                                <p className={css.testimontext}>{text}</p>
                            </span>
                            <div className={css.testimondesc}>
                                <div className={css.triangle}>
                                    <svg width="60" height="40" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0" y1="0" x2="30" y2="40" stroke="#b9ff66" strokeWidth="1" />
                                        <line x1="60" y1="0" x2="30" y2="40" stroke="#b9ff66" strokeWidth="1" />
                                        <line x1="0" y1="0" x2="60" y2="0" stroke="#191a23" strokeWidth="2" />
                                    </svg>
                                </div>
                                <p className={css.testimonname}>{name}</p>
                                <p className={css.testimontext}>{job}</p>
                            </div>
                        </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
    )
}
export default Testimonials;