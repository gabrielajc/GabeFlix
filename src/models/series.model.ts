export interface SeriesModel {

   url: string
   error: boolean;
   msg: string;
   name: string;
   email: string;
   urls: Array<urls>
}

export interface urls {
   type: string
   urlink: string
}
