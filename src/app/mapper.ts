export function getCategoryLabel(category: string): string {
    return CATEGORIES[category as keyof typeof CATEGORIES] ?? '';
}

enum CATEGORIES {
    'men' = 'Hombres',
    'women' = 'Mujeres',
    'kids' = 'Niños'
}