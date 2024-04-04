'use client';

import AirtimeOffers from '@/components/Airtime';
import BundleOffers from '@/components/Bundle';
import Checkout from '@/components/Checkout';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';

// Define the Product interface
interface Product {
	offer: string;
	price: string | number; // assuming price is a string in your config
}

export default function Home() {
	const [selected, setSelected] = useState<Product | null>(null);

	console.log(selected?.offer); // Optional chaining to avoid errors

	return (
		<div className='container max-w-screen-lg mx-auto'>
			<h1 className='text-2xl lg:text-4xl font-bold my-3 text-slate-800'>
				MHA Mini Shop
			</h1>
			<h3 className='text-sm md:text-base font-medium text-slate-500 mb-4'>
				Select your preferred offer and proceed to checkout
			</h3>
			<div className='w-full'>
				<RadioGroup
					value={selected}
					onChange={setSelected}
					className='w-full flex flex-col sm:flex-row sm:space-x-6'
				>
					<AirtimeOffers />
					<BundleOffers />
				</RadioGroup>
			</div>
			<Checkout
				offer={selected?.offer}
				price={selected?.price}
			/>
		</div>
	);
}
