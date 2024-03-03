import { FORM_VALIDATION, Regex } from "../features/common/constants";
import yup from "../plugins/yup";

const nameSchema = yup
  .string()
  .required('Tên Sản Phẩm là trường bắt buộc !')
  .min(FORM_VALIDATION.textMinLength, 'Tên sản phẩm không được quá ít ký tự !')
  .max(FORM_VALIDATION.nameMaxLength, 'Tên sản phẩm không được dài quá !')
  .matches(Regex.NAME, 'Sai định dạng văn bản !');

const priceSchema = yup
  .string()
  .required('Giá Sản Phẩm là trường bắt buộc !')
  .matches(FORM_VALIDATION.numberPrice, 'Sai định dạng văn bản !')
  .max(FORM_VALIDATION.passwordMaxLength, 'Giá sản phẩm không được dài quá !')


const quantitySchema = yup
  .string()
  .required('Số lượng là trường bắt buộc !')
  .matches(FORM_VALIDATION.numberPrice, 'Sai định dạng văn bản !')
  .max(FORM_VALIDATION.phoneMaxLength, 'Tên sản phẩm không được dài quá !')



const descriptionSchema = yup
  .string()
  .required('Mô tả Sản Phẩm là trường bắt buộc !')
  .min(FORM_VALIDATION.textMinLength, 'Miêu tả sản phẩm không được quá ít ký tự !')
  .max(FORM_VALIDATION.textMaxLength, 'Miêu tả sản phẩm không được dài quá !')
  .matches(Regex.DES, 'Sai định dạng văn bản !');

const imageSchema = yup
  .string()
  .required('Hình ảnh Sản Phẩm là trường bắt buộc !')
  .min(FORM_VALIDATION.urlMinLength, 'Link hình ảnh sản phẩm không được quá ít ký tự !')
  .max(FORM_VALIDATION.urlMaxLength, 'Link hình ảnh sản phẩm không được dài quá !')
export const productFormSchema = yup.object().shape({
  name: nameSchema,
  price: priceSchema,
  quantity: quantitySchema,
  description: descriptionSchema,
  image: imageSchema,
});

