import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { getCustomTheme } from '../src/app/theme';

const theme = getCustomTheme()

const useStoryWithProviders = (Story, context) => (
        <ThemeProvider theme={theme}>
                <Story {...context} />
        </ThemeProvider>
);

export const parameters = {
    actions: {
        argTypesRegex: '^on[A-Z].*',
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [ useStoryWithProviders ];
