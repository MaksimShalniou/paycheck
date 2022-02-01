import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    wrapper: {
        minHeight: 'calc(100vh - 100px)',
        minWidth: '100vw',
        backgroundColor: (props: {backgroundColor: string}) => props.backgroundColor,
        scrollMarginTop: "70px"
    }
});