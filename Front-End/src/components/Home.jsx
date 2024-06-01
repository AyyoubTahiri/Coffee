
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Banner from './Banner/Banner'
import AppStore from './AppStore/AppStore'
import Testimonials from './Testimonials/Testimonials'
import Footer from './Footer/Footer'

export default function Home() {
    return (
        <div>
         
            <Hero />
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/vUhEvcg3tpk?si=qGb81S2TCYYpaqnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Services />
            <Banner />
            <AppStore />
            <Testimonials />
          
        </div>
    )
}
