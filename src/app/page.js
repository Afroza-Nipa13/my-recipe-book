import Image from "next/image";
import Banner from "./components/Banner";
import ProductHighlights from "./components/ProductHighlights";


const Home= async()=> {
  
  return (
    <div className="">
      <Banner></Banner>
      <ProductHighlights></ProductHighlights>
        
     
    
    </div>
  );
}
export default Home;
