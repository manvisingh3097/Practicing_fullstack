import { useParams } from "react-router-dom";
import CategoryNames from "../components/CategoryNames";
import EachCategory from "../components/EachCategory";
import Navbar from "../components/Navbar";
import Header from "../components/Header"

function CategoryPage() {
  const catName = useParams();

  return (
    <>
      <Header />
      <hr/>
      <Navbar />
      <hr/>
      <CategoryNames />
      <EachCategory data={catName} />
    </>
  );
}
export default CategoryPage;
