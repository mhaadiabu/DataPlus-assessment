import { Fragment, useState } from 'react';
import { RadioGroup, Dialog, Transition } from '@headlessui/react';
import AirtimeSelection from '@/components/AirtimeSelection';
import BundleSelection from '@/components/BundleSelection';
import Checkout from './Checkout';

interface Product {
	offer: string;
	price: number;
}

const ProductSelection = () => {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [quantity, setQuantity] = useState<number>(1);
	const price = selectedProduct?.price;
	const offer = selectedProduct?.offer;

	// const quantityChange = (e) => {
	// 	setQuantity(parseInt(e.target.value));
	// }

	// const checkoutValues = () => {
	// 	if (selectedProduct) {
	// 		const totalPrice = selectedProduct.price * quantity;
	// 		return `You have selected ${quantity} of ${selectedProduct.offer} for GHS ${totalPrice}`;
	// 	} else {
	// 		alert('Please select an offer');
	// 	}
	// };

	return (
		<>
			<section className='container mx-auto max-w-7xl'>
				<h1 className='text-3xl font-bold mb-4 text-slate-900'>
					Product Selection
				</h1>
				<RadioGroup
					value={selectedProduct}
					onChange={setSelectedProduct}
					className='max-sm:space-y-4 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center'
				>
					{/* {purchaseConfig.airtimeItems.map((product) => (
						<RadioGroup.Option
							key={product.price}
							value={product}
							className={({ active, checked }) => `${
								active || checked
									? 'ring-2 ring-slate-700 ring-offset ring-offset-slate-500 bg-slate-800 text-slate-50 hover:bg-slate-700'
									: 'text-slate-800'
							}
						cursor-pointer rounded-md px-6 py-4 shadow w-full bg-slate-100 border border-slate-500 hover:bg-slate-300 transition
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
					))} */}
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
						className='border border-slate-500 text-slate-900 rounded-md px-4 py-2 w-full'
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
