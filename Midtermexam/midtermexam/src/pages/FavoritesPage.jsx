import CategoryNames from "../components/CategoryNames";
import Navbar from "../components/Navbar";
import Wishlist from "../components/Wishlist";
import Header from "../components/Header";

function FavoritesPage() {
  return (
    <>
      <Header />
      <hr/>
      <Navbar />
      <hr/>
      <CategoryNames />
      <Wishlist />
    </>
  );
}
export default FavoritesPage;
