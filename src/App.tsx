import { useLayoutEffect } from "react"
import ProductSearch from "./components/product/ProductSearch"
import Slider from "./components/ui/Slider"
import MosaicView from "./pages/main/home/MosaicView"
import Banner from "./pages/main/home/Banner"
import CategorySlider from "./components/category/CategorySlider"

const App = () => {

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Slider />
      <CategorySlider />
      <Banner />
      <hr className="border-t border-white" />
      <ProductSearch />
      <MosaicView />
    </>
  )
}

export default App