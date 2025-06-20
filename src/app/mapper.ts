export enum CATEGORIES {
    'men' = 'Hombres',
    'woman' = 'Mujeres',
    'kids' = 'Niños'
}

export const CATEGORY_DATA: Record<string, CategoryData> = {
    men: {
        headerBanner: 'assets/menHeaderBanner.webp',
        categoryLabel: getCategoryLabel('men'),
        footerBanner: 'assets/footerBanner.jpg',
    },
    woman: {
        headerBanner: 'assets/womanHeaderBanner.webp',
        categoryLabel: getCategoryLabel('woman'),
        footerBanner: 'assets/womanFooterBanner.webp',
    },
    kids: {
        headerBanner: 'assets/kidsHeaderBanner.jpg',
        categoryLabel: getCategoryLabel('kids'),
        footerBanner: 'assets/kidsFooterBanner.webp',
    },
};

export function getCategoryLabel(category: string): string {
    return CATEGORIES[category as keyof typeof CATEGORIES] ?? '';
}

export function getCategoryData(category: string): CategoryData {
    return CATEGORY_DATA[category];
}

export interface CategoryData {
    headerBanner: string;
    categoryLabel: string;
    footerBanner: string;
}

export const SIZES = [35,36,37,38,39,40,41,42,43,44,45];