export type Toy ={
    price: number;
    amazon_link: string;
}


interface AmazonProps{
    toy: Toy;
}

const BuyOnAmazonSidebar: React.FC<AmazonProps>= ({
    toy
}) => {
    return(
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">${toy.price}</h2>
            <a href={`${toy.amazon_link}`}>Buy on Amazon</a>
        </aside>
    )
}

export default BuyOnAmazonSidebar