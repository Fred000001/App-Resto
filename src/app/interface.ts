export interface RestoCategorie {
    title: string,
    uuid: string,
    recipes: restoRecepies[]
}

export interface restoRecepies {
    description: string,
    price: number,
    uuid: string,
    title: string,
    imageUrl: string
}

export interface APIResponse {
    title: string
    data: RestoCategorie[]
}