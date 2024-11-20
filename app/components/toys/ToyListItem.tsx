import Image from "next/image";
import { ToyType } from "./ToyList";
import { useRouter } from "next/navigation";

interface ToyProps {
    toy: ToyType
}

const ToyListItem: React.FC<ToyProps> = ({
    toy
}) => {
    const router = useRouter();

    return (
        <div 
            className="cursor-pointer"
            onClick={() => router.push(`/toys/${toy.id}`)}
        >
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src={toy.image_url}
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Baby Toy"
                    />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">{toy.name}</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>${toy.price}</strong></p>
            </div>
        </div>
    )
}

export default ToyListItem;