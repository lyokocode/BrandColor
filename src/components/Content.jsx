import { Brand, Search } from "./";
import { useSelector } from 'react-redux';


export function Content() {
    const brands = useSelector(state => state.brands);

    console.log(brands)
    return (
        <main className='flex-1 overflow-y-auto'>
            <header className="w-full h-14 border-b-[1px] border-[#ccc] flex sticky top-0">
                <Search />
            </header>
            <div className="">
                {brands && brands.map((brand, i) => (
                    <Brand brand={brand} key={i} />
                ))}
            </div>
        </main>
    )
}
