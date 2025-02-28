'use client';

import type { TextInputProps } from '@innovixx/react-form-fields';
import { TextInput } from '@innovixx/react-form-fields';
import React from 'react';
import sharedStyles from '../sharedStyles/styles.module.scss';

type Props = TextInputProps

export const AppTextInput: React.FC<Props> = ({ classNames, ...props }) => (
	<TextInput
		classNames={{
			input: sharedStyles.input,
			error: sharedStyles.errorMessage,
			...classNames,
			...classNames,
		}}
		{...props}
	/>
);
