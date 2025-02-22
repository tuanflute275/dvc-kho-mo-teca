import { GetValueEnviroment } from "./helper";

export const PAGE_SIZE_DEFAULT = 15;
export const URL_API_DEFAULT = GetValueEnviroment("REACT_APP_API_SERVER");

export const TYPE_JSON = "JSON";
export const TYPE_XML = "XML";
export const TYPE_XLSX = "XLSX";
export const TYPE_CSV = "CSV";
export const TYPE_PDF = "PDF";


export const API_URI = {
  LOGIN: `${URL_API_DEFAULT}/login`,
  REGISTER: `${URL_API_DEFAULT}/register`,

  CATEGORY_VIEW: `${URL_API_DEFAULT}/category/search`,
  CATEGORY_DETAIL: `${URL_API_DEFAULT}/category`,
  CATEGORY_SAVE: `${URL_API_DEFAULT}/category`,
  CATEGORY_UPDATE: `${URL_API_DEFAULT}/category`,
  CATEGORY_DELETE: `${URL_API_DEFAULT}/category`,

};