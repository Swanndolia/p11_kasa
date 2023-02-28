import '../assets/css/banner.css';

const Banner = ({ bannerLink }) => {
    if (bannerLink.includes("home")) {
        return (
            <div className='banner-container'>
                <p className='banner-title'></p>
                <img src={bannerLink} className="banner" alt="banner"></img>
            </div>)
    }
    else {
        return (
            <div className='banner-container'>
                <img src={bannerLink} className="banner" alt="banner"></img>
            </div>)
    }
};

export default Banner;