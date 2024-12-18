import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OtherOffers from './components/otherOffers/otherOffers';
import MyProfile from './components/profile/profile';
import PostOffer from './components/postOffer/PostOffer';
import Listallrfq from './components/rfq/Listallrfq';
import MyOffers from './components/myOffers/MyOffers';
import EditMyOffer from './components/myOffers/EditMyOffer';
import RecentLiked from './components/recentLikedPosts/RecentLikedOffers';
import ViewOtherOffer from './components/otherOffers/ViewOtherOffer';
import HomePage from './components/homePage/HomePage';
import LoginPage from './components/loginPage/LoginPage';
import ContactPage from './components/contactPage/ContactPage';
import ContactPage2 from './components/ContactPage2/ContactPage2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/dashboard" element={<OtherOffers />}></Route>
        <Route path="/rfq" element={<Listallrfq />}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>
        <Route path="/post-offer" element={<PostOffer />}></Route>
        <Route path="/my-offer" element={<MyOffers />}></Route>
        <Route path="/edit-myOffer" element={<EditMyOffer />}></Route>
        <Route path="/recent-liked" element={<RecentLiked />}></Route>
        <Route path="/view-otherOffer" element={<ViewOtherOffer />}></Route>
        <Route path="/dash-contact" element={<ContactPage2 />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
