import { useState, useEffect } from "react";

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/images/internship.avif",
        "/images/coaching.webp",
        "/images/mvp.webp",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">

            {/* SOCIALS LEFT */}
            <div className="socials-left">
                <span>INSTAGRAM</span>
                <span>TWITTER</span>
                <span>FACEBOOK</span>
            </div>

            <div className="hero-inner container">

                {/* CENTER CONTENT */}
                <div className="center-content">
                    {/* BIG TITLE */}
                    <div className="big-title">
                        <div className="title-row">
                            <div className="small-title">
                                <p>HI, THIS IS</p>
                                <h4>GROWEDGE</h4>
                                <img src="/images/7.svg" alt="underline" className="underline-svg" />
                            </div>
                            <h1>YOUR</h1>
                            <img src="/images/Asset 4.svg" alt="icon" className="title-icon" />
                        </div>
                        <div className="title-row">
                            <h1>TRUSTED GROWTH</h1>
                        </div>
                        <div className="title-row">
                            <h1>PARTNER</h1>
                            <div className="img-contact-row">
                                <div className="img-wrapper">
                                    {/* <img src="/images/internship.avif" alt="partner" className="main-img" /> */}
                                    <img src={images[currentImage]} alt="partner" className="main-img" />

                                </div>
                                <div className="circle-btn">
                                    <i className="fa-solid fa-arrow-trend-up arrow"></i>
                                    <svg width="120" height="120" viewBox="0 0 120 120">
                                        <defs>
                                            <path
                                                id="circlePath"
                                                d="M60,10 a50,50 0 1,1 -0.1,0"
                                            />
                                        </defs>

                                        <text fontSize="10" fill="#fff">
                                            <textPath xlinkHref="#circlePath" startOffset="0%">
                                                CONTACT US • CONTACT US • CONTACT US •
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="desc-curve-row">
                        <div className="curve-svg">
                            <svg width="300" height="180" viewBox="0 0 300 180">
                                <path
                                    id="curvePath"
                                    d="M10,40 Q150,170 290,40"
                                    stroke="#1b2d55"
                                    strokeWidth="4"
                                    fill="transparent"
                                />

                                <text fontSize="14" fill="#1c2b4d" fontWeight="400" style={{ baselineShift: "5px" }}>
                                    <textPath href="#curvePath" startOffset="30%" spacing="auto">
                                        SCROLL NOW
                                    </textPath>
                                </text>
                                <image
                                    href="/images/arr.svg"
                                    width="30"
                                    height="25"
                                    x="276"
                                    y="26"
                                />
                            </svg>
                        </div>
                        <p className="desc">
                            GrowEdge helps young talents build real skills and unlock their full potential.
                            We guide students step by step toward confidence, growth, and new opportunities.
                            Join us and take the edge in your learning journey.
                            {/* <div className="know-more">KNOW MORE</div> */}

                        </p>

                    </div>
                </div>

            </div>

        </section>
    );
}
