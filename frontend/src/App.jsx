import { useEffect, useState } from "react";
import styles from "./myApp.module.css";
import axios from "axios";

const App = () => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(()=>{
    getProducts();
  }, [])

  const getProducts = async () => {
    var response = await axios.get("http://localhost:8080/product/findAll");
    setListProducts(response.data);
  }

  const deleteProduct = async (idProduct) => {
    await axios.delete("http://localhost:8080/product/deleteOne/" + idProduct);

    /*var listProductsTemp = [...listProducts];
    listProductsTemp = listProductsTemp.filter(prod => prod._id != idProduct);
    setListProducts(listProductsTemp);*/
    getProducts();
  }

  return (
    <div>
      <div className={styles.productsParent}>

        {
          listProducts.map((product, index) => {
            return  <div key={index} className={styles.productBox}>
                      <strong>Nombre:</strong> {product.name}
                      <br />
                      <strong>SKU:</strong> {product.sku}
                      <br />
                      <button onClick={()=>deleteProduct(product._id)}>Eliminar Producto</button>
                    </div>
          })
        }

      </div>
    </div>
  )
}

export default App;