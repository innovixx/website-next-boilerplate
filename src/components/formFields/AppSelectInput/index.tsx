'use client';

import type { SelectInputProps } from '@innovixx/react-form-fields';
import { SelectInput } from '@innovixx/react-form-fields';
import React from 'react';
import sharedStyles from '../sharedStyles/styles.module.scss';

type Props = SelectInputProps

export const AppSelectInput: React.FC<Props> = ({ classNames, ...props }) => (
	<SelectInput
		classNames={{
			error: sharedStyles.errorMessage,
			...classNames,
		}}
		styles={{
			valueContainer: (provided) => ({
				...provided,
				padding: '0 10px',
			}),
			control: (provided, state) => ({
				...provided,
				borderRadius: '5px !important',
				minHeight: '52px',
				padding: '0 10px',
				cursor: 'pointer',
				...(state.isFocused && {
					outlineOffset: '2px',
				}),
			}),
			option: (provided) => ({
				...provided,
				cursor: 'pointer',
				borderRadius: '5px !important',
			}),
			menu: (provided) => ({
				...provided,
				borderRadius: '5px !important',
				padding: '0 5px',
			}),
		}}
		{...props}
	/>
);
