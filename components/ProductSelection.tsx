'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import AirtimeSelection from '@/components/AirtimeSelection';
import BundleSelection from '@/components/BundleSelection';
import Checkout from './Checkout';

interface Product {
	offer: string;
	price: number;
}

const ProductSelection = () => {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [quantity, setQuantity] = useState<number>(0);
	const price = selectedProduct?.price;
	const offer = selectedProduct?.offer;

	return (
		<>
			<section className='container mx-auto max-w-7xl'>
				<RadioGroup
					value={selectedProduct}
					onChange={setSelectedProduct}
					className='max-sm:space-y-4 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center'
				>
					<AirtimeSelection />
					<BundleSelection />
				</RadioGroup>
				<div className='mt-8'>
					<label
						htmlFor='quantity'
						className='font-bold mb-2 text-slate-500'
					>
						Quantity:
					</label>
					<input
						type='number'
						id='quantity'
						value={quantity}
						onChange={(e) => setQuantity(parseInt(e.target.value))}
						placeholder='Enter desired quantity...'
						className='border border-slate-500 text-slate-900 placeholder:text-slate-500 placeholder:text-sm rounded-lg px-4 py-2 w-full'
					/>
				</div>
				<Checkout
					selectedProductPrice={price}
					selectedProductOffer={offer}
					quantity={quantity}
				/>
			</section>
		</>
	);
};

export default ProductSelection;
