import WhoImage from '../assets/who.png';


export const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container">
                    <p className='home-p'>
                        Aspiring Multimedia Artist- my passion lies in <strong>bringing creative visions to
                            life through dynamic visual storytelling</strong>. With a background in creative directing
                        and event planning, I am adept at conceptualizing and executing projects that
                        resonate with audiences across diverse industries. Whether it's contributing to
                        the entertainment, apparel, marketing, or non-profit sectors, I am committed to
                        leveraging my skills to  <strong>make a meaningful impact through the power of
                            multimedia arts.</strong>
                    </p>
                    <img src={WhoImage} width="400vh" alt="Who?" />
                </div>
            </div>
        </>
    )
}

export default Home;