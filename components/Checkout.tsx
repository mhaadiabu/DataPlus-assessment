'use client';

interface CheckoutProps {
	offer: string;
	price: string;
}

const Checkout = ({ offer, price }: CheckoutProps) => {
	const handleCheckout = () => {
		alert(`You have purchased ${offer} for ${price}.`);
	};

	return (
		<button
			onClick={handleCheckout}
			className='text-base font-medium uppercase px-5 py-4 rounded-md bg-sky-500 mt-4'
		>
			Checkout
		</button>
	);
};

export default Checkout;
