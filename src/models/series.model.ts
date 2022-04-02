export interface SeriesModel {

   url: string
   error: boolean;
   msg: string;
   name: string;
   email: string;
   urls: Array<Urls>
}

export interface Urls {
   type: string
   urlink: string
}
