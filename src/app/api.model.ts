export interface ShoesDto {
    id: number,
    name: string,
    category: string,
    img: string
}

export interface ShoeDto {
    id: number,
    shoeId: number,
    name: string,
    price: number,
    category: string,
    imgs: string[],
    colors: string[],
    qty: number[],
    sizes: number[][]
}