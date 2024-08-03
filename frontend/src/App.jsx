import { useEffect, useState } from "react";
import styles from "./myApp.module.css";
import axios from "axios";
import { object, string, number } from 'yup';

const App = () => {
  const [listProducts, setListProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productSku, setProductSku] = useState("");
  const [productDate, setProductDate] = useState("");
  const [productType, setProductType] = useState("");
  const [productQuimico, setProductQuimico] = useState("");

  const [productAccept, setProductAccept] = useState(false);

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

  const createProduct = async () => {
    console.log(productName);
    console.log(productSku);
    console.log(productDate);
    console.log(productType);
    console.log(productQuimico);
    console.log(productAccept);
    
    let productSchema = object({
      name: string().required(),
      sku: number().required().positive().integer()
    });

    var data = {
      "name": productName,
      "sku": productSku,
      "isAvailable": true
    };

    var valid = await productSchema.isValid(data);
    if(!valid){
      alert("Error en el formulario");
      return;
    }

    var response = await axios.post("http://localhost:8080/product/create", data);
    setProductName("");
    setProductSku("");

    var newProduct = response.data;

    var listProductsTemp = [...listProducts];
    listProductsTemp.push(newProduct);
    setListProducts(listProductsTemp);
  }

  return (
    <div>
      <div className={styles.productForm}>
        <label>Nombre: </label>
        <input type="text" onChange={(e) => setProductName(e.target.value)} value={productName}/>

        <label>SKU: </label>
        <input type="number" onChange={(e) => setProductSku(e.target.value)} value={productSku}/>

        <label>Fecha</label>
        <input type="date" onChange={(e) => setProductDate(e.target.value)} value={productDate}/>

        <label>Tipo</label>
        <select onChange={(e) => setProductType(e.target.value)}>
          <option value="1">Lacteo</option>
          <option value="2">Vegano</option>
        </select>

        <div>
          <label>Tiene quimicos?</label>
          <label>Si</label>
          <input type="radio" name="quimico" value="1" onChange={(e) => setProductQuimico(e.target.value)}/>
          <label>No</label>
          <input type="radio" name="quimico" value="0" onChange={(e) => setProductQuimico(e.target.value)}/>
        </div>

        <div>
          <label>Acepta terminos?</label>
          <input type="checkbox" checked={productAccept} onChange={(e) => setProductAccept(!productAccept)}/>
        </div>

        <button onClick={createProduct}>Crear producto</button>
      </div>
      <br />
      <br />
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