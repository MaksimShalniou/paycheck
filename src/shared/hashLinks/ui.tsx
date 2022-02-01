import React, { FC, Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';
import { IHashLinksConfig } from './';

export const HashLinks: FC<IHashLinksConfig> = ({ config }) => <Fragment>
    {config.map((value, index) => <HashLink smooth to={value.path} key={index}>{value.title}</HashLink>)}
</Fragment>