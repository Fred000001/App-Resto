import { Injectable } from "@angular/core";
import { RestoCategorie, restoRecepies ,APIResponse } from "./interface";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn:'root'
})


export class APIService {

        constructor (
            private readonly _http: HttpClient
        ) { }

         async getRecipes() {
         const url = "./Resto-data.json"
         const response = this._http.get<APIResponse>(url)
         const result = await firstValueFrom(response)

        //  const result: APIResponse = await fetch(url).then(response => response.json())
         return result.data
     }




    //  async getRecipes() {
    //     const url = "./Resto-data.json"
    //     const response = this._http.get<APIResponse>(url, {
    //         headers: {
    //             "auth": "KeyApi"
    //         }
    //     })
    //     const result = await firstValueFrom(response)


    

    // async getRecipes() {
    //     const url = "./Resto-data.json"
    //     const result: APIResponse {
    //         data: RestoCategorie[]
    //     } = await fetch(url).then(response => response.json())
    //     return result.data
    // }

    // async getRecipes() {
    //     const url = "./resto-data.json";
    //     const result: APIResponse = await fetch(url).then(response => response.json());
    //     return result.data;
    // }
}