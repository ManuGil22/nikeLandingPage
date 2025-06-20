export interface ShoesDto {
    id: string,
    name: string,
    category: string,
    img: string
}

export interface ShoeDto {
    id: string,
    shoeId: number,
    name: string,
    price: number,
    category: string,
    imgs: string[],
    colors: string[],
    qty: number[],
    sizes: number[][]
}

export interface ItemDto {
    shoeId: number,
    qty: number,
    size: number,
    color: string,
    img: string,
    name: string,
    precio: number,
}

export interface PurchaseDto {
    name: string,
    surname: string,
    address: string,
    department: string,
    city: string,
    phone: string,
    identificationNumber: string,
    shoes: ItemDto[];
}