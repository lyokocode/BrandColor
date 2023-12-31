
import { useSelector } from 'react-redux';
import Brand from "../components/Brand";

export default function Content() {

    const searchValue = useSelector((state) => state.search);
    const brands = useSelector(state => state.brands);

    const filteredBrands = brands.filter((brand) =>
        brand.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <>
            {brands && filteredBrands ? (
                <>
                    {filteredBrands.map(brand => (
                        <Brand brand={brand} key={brand.slug} />
                    ))}
                </>
            ) : ("loading")}
        </>
    )
}
