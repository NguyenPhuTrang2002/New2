import { ICommonListQuery, IProductFormCreate } from "../../common/interfaces";
import { productApiService } from "../../service";

export const ProductApi = () => {
  async function getAllProducts(query: ICommonListQuery): Promise<any> {
    const res = await productApiService.getAll(query);
    return res;
  }

  async function createProducts(body: IProductFormCreate): Promise<any> {
    const res = await productApiService._create(body);
    return res;
  }

  return {
    createProducts,
    getAllProducts
  }
}
