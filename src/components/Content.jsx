import { Brand, Search } from "./";
import { useSelector } from 'react-redux';


export function Content() {
    const searchValue = useSelector((state) => state.search);
    const brands = useSelector(state => state.brands);

    const filteredBrands = brands.filter((brand) =>
        brand.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <main className='flex-1 overflow-y-auto'>
            <header className="w-full h-14 border-b-[1px] border-[#ccc] flex sticky top-0 z-20">
                <Search />
            </header>
            {brands && filteredBrands ? (
                <div className="">
                    {filteredBrands.map((brand, i) => (
                        <Brand brand={brand} key={i} />
                    ))}
                </div>
            ) : ("loading")}
        </main>
    )
}
