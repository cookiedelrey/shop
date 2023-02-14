import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductList from "../Product/ProductList";

    const MainLayout = () => {
      const [searchTerm, setSearchTerm] = useState('');
    
  return (
    <div>
      <Navbar onSearch={(term) => setSearchTerm(term)} />
      <ProductList searchTerm={searchTerm}/>
      <Footer />
    </div>
  );
};

export default MainLayout;
