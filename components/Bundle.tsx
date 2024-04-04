'use client';

import { purchaseConfig } from '@/config/purchase';
import { RadioGroup } from '@headlessui/react';

const BundleOffers = () => {
	return (
		<section className='flex w-full sm:w-1/2 flex-wrap space-y-6'>
			{purchaseConfig.bundleItems.map((offers) => (
				<RadioGroup.Option
					key={offers.price}
					value={offers}
					className={({ active, checked }) => `${
						active
							? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
							: ''
					}
        ${checked ? 'bg-sky-700/75 text-white' : 'bg-white'}
        cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none w-full
        `}
				>
					{({ active, checked }) => (
						<>
							<div className='w-full flex items-center justify-between'>
								<div className='flex flex-col flex-wrap'>
									<RadioGroup.Label
										as='p'
										className={`text-lg font-medium block ${
											checked ? 'text-white' : 'text-gray-900'
										}`}
									>
										{offers.offer}
									</RadioGroup.Label>
									<RadioGroup.Description
										as='span'
										className={`text-sm ${
											checked ? 'text-sky-100' : 'text-gray-500'
										}`}
									>
										<span>{offers.price}</span>
									</RadioGroup.Description>
								</div>
								{checked && <div className='shrink-0 text-white'>Tick</div>}
							</div>
						</>
					)}
				</RadioGroup.Option>
			))}
		</section>
	);
};

export default BundleOffers;
