import React, { FC } from 'react';
import './index.scss';
import Target from '../Target/Target';

const Field: FC = () => {
	return (
		<section className='field'>
			<Target />
		</section>
	);
};

export default Field;
