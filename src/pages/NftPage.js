import { Container } from '@mui/material';
import React,{useEffect} from 'react';
import Navbar from "../components/Navbar/Navbar";


import AutoComplete from '../components/AutoComplete/AutoComplete';
import NftContent from '../components/NftContent/NftContent';

const NftPage = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div>
            <Navbar/>
            <NftContent/>
            
            
        </div>
    );
};

export default NftPage;