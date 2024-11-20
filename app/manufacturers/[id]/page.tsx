import Image from "next/image";
import ToyList from "@/app/components/toys/ToyList";

const ManufacturerDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shawdow-xl">
                        <Image
                            src='/Popular+Logo.jpg'
                            width={200}
                            height={200}
                            alt="Popular Playthings"
                            className="rounded-full"
                        />

                        <h1 className="mt-6 text-2xl">Popular Playthings</h1>
                        <h2 className="mt-6">website</h2>
                    </div>
                </aside>
                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <ToyList />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ManufacturerDetailPage;