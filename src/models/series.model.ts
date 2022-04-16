export interface SeriesModel {

   url: string
   error: boolean;
   msg: string;
   name: string;
   email: string;
   urls: Array<Urls>
   titulos: Array<Titulos>
}

export interface Urls {
   type: string
   urlink: string
}

export interface Titulos {
  titulo: string
}
