import ProductSearch from "./components/product/ProductSearch"
import CategorySlider from "./components/ui/CategorySlider"
import Slider from "./components/ui/Slider"
import MosaicView from "./pages/main/home/MosaicView"
import Banner from "./pages/main/product/Banner"

const App = () => {
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