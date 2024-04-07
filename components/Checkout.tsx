import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface CheckoutProps {
	selectedProductPrice: number | undefined;
	selectedProductOffer: string | undefined;
	quantity: number;
}

const Checkout = ({
	selectedProductPrice,
	selectedProductOffer,
	quantity,
}: CheckoutProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState('');
	const [messageHead, setMessageHead] = useState('');

	useEffect(() => {
		const totalPrice = selectedProductPrice
			? selectedProductPrice * quantity
			: null;
		setMessageHead(
			selectedProductOffer && selectedProductPrice && quantity
				? 'Success!'
				: 'Warning!'
		);
		setMessage(
			selectedProductOffer && selectedProductPrice && quantity
				? `You have successfully purchased ${quantity} of ${selectedProductOffer} offer for GHS ${totalPrice}.`
				: 'Please select a valid offer.'
		);
	}, [selectedProductPrice, selectedProductOffer, quantity]);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const buttonClasses =
		'inline-flex justify-center rounded-lg border-transparent bg-slate-800 hover:bg-slate-700 px-4 py-2 text-sm font-medium text-slate-50 focus:outline-none focus-visible:ring-slate-800 focus-visible:ring-offset-2 max-sm:w-full';

	return (
		<section className='container max-w-7xl'>
			<button
				onClick={openModal}
				className={`${buttonClasses} mt-4`}
			>
				Checkout
			</button>
			<Transition
				appear
				show={isOpen}
				as={Fragment}
			>
				<Dialog
					as='div'
					className='relative z-10'
					onClose={closeModal}
				>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-slate-900/25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
									<Dialog.Title
										as='h3'
										className='text-lg font-bold leading-6 text-slate-900'
									>
										{messageHead}
									</Dialog.Title>
									<div className='mt-2'>
										<p className='text-slate-500'>{message}</p>
									</div>
									<div className='mt-4'>
										<button
											type='button'
											onClick={closeModal}
											className={buttonClasses}
										>
											Got it, thanks!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</section>
	);
};

export default Checkout;
