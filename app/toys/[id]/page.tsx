import Image from "next/image";
import BuyOnAmazonSidebar from "@/app/components/toys/BuyOnAmazonSidebar";

import apiService from "@/app/services/apiService";

type Params = Promise<{ id: string}>

const ToyDetailPage = async ({params}: { params: Params}) => {
    const toy = await apiService.get(`/api/toys/${params}`)

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={toy.image_url}
                    className="object-cover w-full h-full"
                    alt="Baby toy"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{toy.name}</h1>
                    
                    <p><strong>[Manufactuerer]</strong></p>

                    <span className="mb-6 block text-lg text-gray-600">
                        {toy.display_age}
                    </span>

                    <hr />

                    <div className="mt-6 text-lg">
                        {toy.description}
                    </div>

                </div>
                <BuyOnAmazonSidebar 
                    toy = {toy}
                />
            </div>
        </main>
    )
}

export default ToyDetailPage;