export type RootStackParamList = {
    Home: undefined,
    Catalog: undefined
    ProductDetail: { id: string }
}

export type CatalogImageGroup = {
    images: {
        alt: string
        link: string
        title: string
    }[]
    variationAttributes?: {
        id: string
        values: {
            value: string
        }[]
    }[]
    viewType: string
}

export type CatalogData = {
    name: string
    brand: string
    price: number
    priceMax?: number
    currency: string
    ean: string
    id: string
    imageGroups: CatalogImageGroup[]
}