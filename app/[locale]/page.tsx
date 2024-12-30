import Banner from '../components/Banner';
import Aboutus from '../components/Aboutus';
import Dedicated from '../components/Dedicated';
import Digital from '../components/Digital';
import Beliefs from '../components/Beliefs';
import Wework from '../components/Wework';
import Ourteam from '../components/Ourteam';
import Featured from '../components/Featured';
import Manage from '../components/Manage';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Articles from '../components/Articles';
import Joinus from '../components/Joinus';
import Insta from '../components/Insta';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {Analytics} from "@vercel/analytics/next";

export default function Home() {
  return (
      <main>
          <Navbar/>
          <Banner/>
          <Aboutus/>
          <Dedicated/>
          <Digital/>
          <Beliefs/>
          <Wework/>
          <Ourteam/>
          <Featured/>
          <Manage/>
          <FAQ/>
          <Testimonials/>
          <Articles/>
          <Joinus/>
          <Insta/>
          <Footer/>
      </main>
  )
}
