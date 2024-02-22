import { ICommonListQuery, IProductFormCreate } from "../../common/interfaces";
import { productApiService } from "../../service";

export const ProductApi = () => {
  async function getAllProducts(query: ICommonListQuery): Promise<any> {
    const res = await productApiService.getAll(query);
    return res;
  }
  async function getProductDetails(productId: string): Promise<any> {
    const res = await productApiService._getDetail<any>(productId);
    return res;
  }
  async function createProducts(body: IProductFormCreate): Promise<any> {
    const res = await productApiService._create(body);
    return res;
  }
  async function deleteProduct(productId: string): Promise<any> {
    try {
      const res = await productApiService._delete(productId);
      return res;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }
  async function updateProduct(productId: string, body: IProductFormCreate): Promise<any> {
    try {
      const res = await productApiService._update(productId, body);
      return res;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  }
  return {
    createProducts,
    getAllProducts,
    deleteProduct,
    updateProduct,
    getProductDetails
  }
}
