
export function Brand({ brand }) {
    return (
        <div className="p-4 border-b-[1px]   border-[#333] flex items-center  ">
            <h5 className="w-40  my-auto py-4   ">{brand.title}</h5>
            <div className="flex-1 flex gap-2 overflow-auto">
                {brand && brand.colors.map((color, i) => (
                    <span key={i}
                        className=" w-12 h-12  indent-[-9999px] "
                        style={{ backgroundColor: `#${color}` }}
                    >
                        {color}
                    </span>
                ))}
            </div>
        </div>
    )
}
