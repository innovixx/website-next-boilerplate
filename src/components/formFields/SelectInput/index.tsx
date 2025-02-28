'use client';

import type { SelectInputProps } from '@innovixx/react-form-fields';
import { SelectInput } from '@innovixx/react-form-fields';
import React from 'react';

type Props = SelectInputProps

export const AppSelectInput: React.FC<Props> = ({ classNames, ...props }) => (
	<SelectInput
		classNames={{
			...classNames,
		}}
		{...props}
	/>
);
