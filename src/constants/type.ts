export interface Item{
    title: string
    description?: string
    subtitle?: string
    image: string
    to?: string
    voted?: number /* star */
    reviews?: number /* numbers of reviews */
    isSoldOut: boolean | string,
    category: string
    price?: any,
    discount?: any
    purity: string
    volume: any[]
    unit: string
    perPrice?: string | number
}