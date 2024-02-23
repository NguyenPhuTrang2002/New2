// ProductPage.js
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { ProductApi } from "../../features/api/product";
import { RootState } from "../../features/common/interfaces";
import { useSelector } from "react-redux";
interface ProductType {
  title: string;
  price: string;
  total: string;
  description: string;
  img: string;
}
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const reload = useSelector((state: RootState) => state.reload)
  console.log(reload);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productApi = ProductApi();
        // console.log((await productApi.getAllProducts()).data.items);
        // setProducts((await productApi.getAllProducts()).data.items);
        const res = await productApi.getAllProducts(
          {
            page: 1,
            limit: 10,
            // keyword: 'váy' 
          }
        );
        console.log(res);
        setProducts(res.data.items);

      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [reload]);

  return (
    <div className="min-h-screen overflow-y-auto bg-[#fff]">
      <Product ListProduct={products} />
    </div>
  );
}

export default ProductPage;
