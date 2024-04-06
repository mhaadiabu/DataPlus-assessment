import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/16/solid';

import { productConfig } from '@/config/product';

interface Product {
	offer: string;
	price: number;
}

const BundleSelection = () => {
	// const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	// const [quantity, setQuantity] = useState<number>(1);

	// const quantityChange = (e) => {
	// 	setQuantity(parseInt(e.target.value));
	// }

	// const handleCheckout = () => {
	// 	if (selectedProduct) {
	// 		const totalPrice = selectedProduct.price * quantity;
	// 		alert(
	// 			`You have selected ${quantity} of ${selectedProduct.offer} for GHS ${totalPrice}`
	// 		);
	// 	} else {
	// 		alert('Please select an offer');
	// 	}
	// };

	return (
		<>
			<section className='container mx-auto max-w-7xl'>
				<h1 className='text-2xl font-bold mb-4 text-slate-900'>
					Bundle Offers
				</h1>
				{productConfig.bundleOffers.map((product) => (
					<RadioGroup.Option
						key={product.price}
						value={product}
						className={({ active, checked }) => `${
							active || checked
								? 'ring-2 ring-slate-700 ring-offset ring-offset-slate-500 bg-slate-800 text-slate-50 hover:bg-slate-700'
								: 'text-slate-800'
						}
						cursor-pointer rounded-md px-6 py-4 my-2.5 shadow w-full bg-slate-100 border border-slate-500 hover:bg-slate-300 transition
					`}
					>
						{({ active, checked }) => (
							<div className='w-full flex justify-between items-center'>
								<div>
									<RadioGroup.Label
										as='p'
										className='text-lg font-bold'
									>
										{product.offer}
									</RadioGroup.Label>
									<RadioGroup.Description
										as='p'
										className='font-medium'
									>
										GHS {product.price}
									</RadioGroup.Description>
								</div>
								{checked && (
									<div className='shrink-0 text-blue-500'>
										{<CheckCircleIcon className='w-6 h-6' />}
									</div>
								)}
							</div>
						)}
					</RadioGroup.Option>
				))}
			</section>
		</>
	);
};

export default BundleSelection;
