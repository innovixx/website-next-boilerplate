'use client';

import type { ToggleInputProps } from '@innovixx/react-form-fields';
import { ToggleInput } from '@innovixx/react-form-fields';
import React from 'react';
import sharedStyles from '../sharedStyles/styles.module.scss';
import { constructClassName } from '../../../utils/constructClassName';

type Props = ToggleInputProps

export const AppToggleInput: React.FC<Props> = ({ classNames, ...props }) => (
	<ToggleInput
		classNames={{
			input: constructClassName([sharedStyles.input, sharedStyles.toggleInput]),
			toggleOptionsContainer: sharedStyles.toggleOptionsContainer,
			error: sharedStyles.errorMessage,
			...classNames,
		}}
		{...props}
	/>
);
