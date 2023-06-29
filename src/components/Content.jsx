import brandData from '../brands.json';

export function Content() {
    const brands = Object.values(brandData);

    return (
        <main className='flex-1 overflow-y-auto'>
            {brands.map((brand, i) => (
                <span key={i}>hello world</span>
            ))}
        </main>
    )
}
