import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate,useLocation } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';

import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts, Login } from './pages';
import React, { useEffect, useState } from 'react';
import { app } from './components/config/firebase.config';
import { getAuth } from 'firebase/auth';

const App = () => {
  const firebaseAuth=getAuth(app);
  const navigate = useNavigate();
  const location= useLocation();
  const { activeSong } = useSelector((state) => state.player);
  
  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")
  useEffect(() => {
      firebaseAuth.onAuthStateChanged((userCred) => {
        if(userCred){
          userCred.getIdToken().then((token) => {
            
          })
        }else{
          setAuth(false);
          window.localStorage.setItem("auth","false");
          navigate("/login")
        }
      })
  }, {})
  const isLoginPage = location.pathname === "/login";
  const isTopChartsPage = location.pathname === "/top-charts";
  const isTopArtistsPage = location.pathname === "/top-artists";
  

  return (
    <div className="relative flex">
       {auth &&  <Sidebar />}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
      {auth && <Searchbar />}

      {auth && (
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/login" element={<Login setAuth={setAuth} />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      )}
      {!auth && (
        <Routes>
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
        </Routes>
      )}
          
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
