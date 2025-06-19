import css from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Testimonials = () => {
    const testimonialsBase = [
        {
            text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            job:"Marketing Director at XYZ Corp",
        },
        {
            text: "Thanks to Positivus, our conversion rates have improved dramatically. Their strategic approach and attention to detail make them a valuable partner.",
            name: "Emily Johnson",
            job:"Head of Growth at ABC Ltd",
        },
        {
            text: "Positivus helped us completely revamp our digital strategy. Their team brought fresh ideas and delivered outstanding results within weeks. We've seen measurable growth in both traffic and engagement.",
            name: "David Lee",
            job: "Digital Strategy Lead at NovaTech"
          },
        {
            text: "Working with Positivus has been a game changer. Their insights and execution in paid advertising brought us more qualified leads than ever before. Truly an exceptional team.",
            name: "Sophia Martinez",
            job: "Performance Marketing Manager at Greenline"
        },
        {
            text: "The Positivus team is organized, data-driven, and incredibly creative. Their content marketing campaign generated buzz across multiple platforms and aligned perfectly with our brand voice.",
            name: "Michael Brown",
            job: "Content Director at Zenith Brands"
        },
        {
            text: "We appreciate Positivus not just for their results, but for how easy and enjoyable they are to work with. Clear communication, fast response times, and real expertise at every step.",
            name: "Olivia Chen",
            job: "VP of Marketing at Horizon Group"
        },
    ]
    return (
        <section className={css.testimon} id="testimonials">
            <div className={css.testimonheaderbox}>
                <h2 className={css.testimonheaderboxheader}>Testimonials</h2>
                <p className={css.testimonheaderboxtext}>
                    Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                </p>
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
                    {testimonialsBase.map((t, i) => (
                        <SwiperSlide key={i} className={css.swiperslide}>
                            <span className={css.rectangle}>
                                <p className={css.testimontext}>{t.text}</p>
                                
                            </span>
                            
                            <div className={css.testimondesc}>
                                <div className={css.triangle}>
                                    <svg width="60" height="40" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0" y1="0" x2="30" y2="40" stroke="#b9ff66" strokeWidth="1" />
                                        <line x1="60" y1="0" x2="30" y2="40" stroke="#b9ff66" strokeWidth="1" />
                                        <line x1="0" y1="0" x2="60" y2="0" stroke="#191a23" strokeWidth="2" />
                                    </svg>
                                </div>
                                <p className={css.testimonname}>{t.name}</p>
                                <p className={css.testimontext}>{t.job}</p>
                            </div>
                        </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
    )
}
export default Testimonials;