import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Dialog, DialogContent } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { MyContext } from '../../App';
function CLMClient() {
    //Mobile View
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        };
    }, [])
    //Swiper Slides
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const slidesData = [
        {
            id: 1,
            name: "Miguel Sanchez ",
            rating: 5,
            company: "IT Support Specialist",
            location: "Virginia, USA",
            testimonial:
                "Asset 365 AI offers a wide range of useful tools that are easy to use and adapt. The support team has been helpful throughout the process.",
        },
        {
            id: 2,
            name: "Chris Hayes",
            rating: 5,
            company: "Asset Manager",
            location: "Asheville, North Carolina",
            testimonial:
                "Asset 365 AI is intuitive and easy to use. The support team is always helpful when I need guidance. It's been great for tracking our growing list of assets.",
        },
        {
            id: 3,
            name: "Luciano Bonilla",
            rating: 5,
            company: "Director of Media Production and Innovation",
            location: "Texas, United States",
            testimonial:
                "With strong customer support and a user-friendly interface, Asset 365 AI enables teams to track assets efficiently and manage maintenance with ease.",
        },
        // {
        //     id: 8,
        //     name: "Sarah Mitchell ",
        //     rating: 5,
        //     company: "Head of Legal Operations  ",
        //     location: "United States ",
        //     testimonial:
        //         "Having all contracts stored in one place has made a big difference for our team. Instead of searching through emails and folders, we can quickly find the documents we need. CLM 365 gives us a centralized repository that makes contract tracking and access much easier. ",
        // },
    ];
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
        }, 5000); // Move to the next slide every 2 seconds for a smoother effect
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const visibleLogos = Array.from({ length: 3 }).map((_, i) =>
        slidesData[(currentIndex + i) % slidesData.length]
    );



    const [isOpen, setIsOpen] = React.useState(false);
    const isTruncated = true;
    const [currentSlide, setCurrentSlide] = React.useState();
    const toggleModal = () => setIsOpen(!isOpen);
    const handleClose = () => {
        setIsOpen(false);
    };

    function openModal(slide) {
        toggleModal();
        setCurrentSlide(slide);

    }

    return (
        <>
            <Swiper
                slidesPerView={isMobile ? 1 : 3}
                spaceBetween={30}
                scrollbar
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="mySwiper"
            >
                {visibleLogos.map((slide) => {
                    const showLogo = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15,].includes(slide.id); // ✅ control by ID

                    return (
                        <SwiperSlide key={slide.id} className="swiperSlidestyles">
                            <div className="CardHeaderStyle">
                                <div>
                                    <div className='no-logo-placeholder'>{/* Optional fallback */}</div>
                                </div>
                                <div>
                                    <div className='outcustomercontent'>
                                        <span className="UserNameStyles">{slide.name}</span>
                                        <span className="elementor-testimonial__title">{slide.company}</span>
                                        <span className="elementor-testimonial__title">{slide.location}</span>
                                        <div className="elementor-star-rating">
                                            {[...Array(slide.rating)].map((_, i) => (
                                                <i key={i} className="elementor-star-full">★</i>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="elementor-testimonial__content">
                                        <div className="elementor-testimonial__text">
                                            {isTruncated
                                                ? `${slide.testimonial.slice(0, 100)}...`
                                                : slide.testimonial}
                                            {slide.testimonial.length > 100 && (
                                                <div>
                                                    <button onClick={() => openModal(slide)} className="read-more-btn">
                                                        Read More
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <span id="Integration-ET"></span>
                                        <span id="Integration-ET"></span>
                                        <span id="pricing-section"></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                maxWidth={"xl"}
                className="ClinetModal"
            >
                <DialogContent>

                    <div className="CardHeaderStyleModal">
                        <div className='flexEnd'>
                            <IoClose onClick={handleClose} />
                        </div>
                        <span className="UserNameStyles">{currentSlide?.name}</span>
                        <span className="elementor-testimonial__title">{currentSlide?.company}</span>
                        <span className="elementor-testimonial__title">{currentSlide?.location}</span>
                        <div className="elementor-star-rating">
                            {[...Array(currentSlide?.rating)].map((_, i) => (
                                <i key={i} className="elementor-star-full">★</i>
                            ))}
                        </div>
                        <div className="elementor-testimonial__content">
                            <div className="elementor-testimonial__text">
                                "{currentSlide?.testimonial}"
                            </div>
                        </div>
                    </div>
                    {/* <h2>{currentSlide?.name}</h2>
                    <p>{currentSlide?.testimonial}</p> */}
                    {/* <button onClick={toggleModal} className="close-btn">Close</button> */}
                </DialogContent>

            </Dialog>
        </>
    )
}

export default CLMClient;