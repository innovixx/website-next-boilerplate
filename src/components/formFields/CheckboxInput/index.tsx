'use client';

import type { CheckboxInputProps } from '@innovixx/react-form-fields';
import { CheckboxInput } from '@innovixx/react-form-fields';
import React from 'react';
import sharedStyles from '../sharedStyles/styles.module.scss';

type Props = CheckboxInputProps

export const AppCheckboxInput: React.FC<Props> = ({ classNames, ...props }) => (
	<CheckboxInput
		classNames={{
			input: sharedStyles.input,
			...classNames,
		}}
		{...props}
	/>
);
