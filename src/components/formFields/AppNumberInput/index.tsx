'use client';

import type { NumberInputProps } from '@innovixx/react-form-fields';
import { NumberInput } from '@innovixx/react-form-fields';
import React from 'react';
import sharedStyles from '../sharedStyles/styles.module.scss';

type Props = NumberInputProps

export const AppNumberInput: React.FC<Props> = ({ classNames, ...props }) => (
	<NumberInput
		classNames={{
			input: sharedStyles.input,
			error: sharedStyles.errorMessage,
			...classNames,
		}}
		{...props}
	/>
);
