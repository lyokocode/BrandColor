
import { lazy } from "react";
import { useSelector } from 'react-redux';
import { Navbar } from "./Navbar";

const Brand = lazy(() => import("./Brand"))
const Search = lazy(() => import("./Search"))

export default function Content() {

    const searchValue = useSelector((state) => state.search);
    const brands = useSelector(state => state.brands);

    const filteredBrands = brands.filter((brand) =>
        brand.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <main className='flex-1 overflow-y-auto'>
            <header className="w-full h-14 border-b-[1px] border-[#ccc] flex sticky top-0 z-20">
                <Search />
                <Navbar />
            </header>
            {brands && filteredBrands ? (
                <div className="">
                    {filteredBrands.map(brand => (
                        <Brand brand={brand} key={brand.slug} />
                    ))}
                </div>
            ) : ("loading")}
        </main>
    )
}
