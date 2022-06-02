import './banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <img className='banner__speech bounce' src={require('../../images/favourite.png')} />
            <p className='banner__review'>Very knowledge and helpful! Abbeville Tutors were flexible with their time and were able to accommodate us. Our tutor, Josh, was able to review all the topics my son needed. He knew the curriculum and exams inside out. My son found it very useful and informative. We will be using Abbeville Tutors again!</p>
            <p className='banner__name'>Sandra M.</p>
        </div>
    )
}

export default Banner