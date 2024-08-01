import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "@/components/Footer/Footer"
import RegistrationForm from "@/components/Registration/RegistrationForm";
import Navbar from "@/components/Navbar/Navbar";
import WhoIsItFor from "@/components/WhoIsIt/WhoIsItFor";
import KeyPointDiscussion from "@/components/KeyPointDiscussion/KeyPointDiscussion";
import Body from "@/components/Body/Body";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Body/>
    <KeyPointDiscussion/>
    <WhoIsItFor/>
    <RegistrationForm/>
      <Footer />
    </>
  );
}
