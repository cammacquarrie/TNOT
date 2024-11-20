'use client';

import { useEffect, useState } from 'react';
import ToyListItem from "./ToyListItem";
import apiService from '@/app/services/apiService';

export type ToyType = {
    id: string;
    name: string;
    image_url: string;
    price: number;
}

const ToyList = () => {
    const [toys, setToys] = useState<ToyType[]>([]);

    const getToys = async () => {
        const tmpToys = await apiService.get('/api/toys/')

        setToys(tmpToys.data);
    };

    useEffect(() => {
        getToys();
    }, []);

    return (
        <>
            {toys.map((toy) => {
                return (
                    <ToyListItem 
                        key={toy.id}
                        toy={toy}
                    />
                )
            })}
        </>
    )
}

export default ToyList;