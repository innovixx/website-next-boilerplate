'use client';

import type { CheckboxGroupInputProps } from '@innovixx/react-form-fields';
import { CheckboxGroupInput } from '@innovixx/react-form-fields';
import React from 'react';
import sharedStyles from '../sharedStyles/styles.module.scss';

type Props = CheckboxGroupInputProps

export const AppCheckboxGroupInput: React.FC<Props> = ({ classNames, ...props }) => (
	<CheckboxGroupInput
		classNames={{
			input: sharedStyles.input,
			...classNames,
		}}
		{...props}
	/>
);
