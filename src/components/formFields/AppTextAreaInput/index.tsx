'use client';

import type { TextAreaInputProps } from '@innovixx/react-form-fields';
import { TextAreaInput } from '@innovixx/react-form-fields';
import React from 'react';
import sharedStyles from '../sharedStyles/styles.module.scss';

type Props = TextAreaInputProps

export const AppTextAreaInput: React.FC<Props> = ({ classNames, ...props }) => (
	<TextAreaInput
		classNames={{
			input: sharedStyles.input,
			error: sharedStyles.errorMessage,
			...classNames,
			...classNames,
		}}
		{...props}
	/>
);
