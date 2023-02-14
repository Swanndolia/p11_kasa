import '../assets/css/banner.css';

const Banner = (props) => {
    const bannerLink = props.bannerLink
    return (
        <div className='banner-container'>
            <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
            <img src={bannerLink} className="banner" alt="banner"></img>
        </div>)
};

export default Banner;