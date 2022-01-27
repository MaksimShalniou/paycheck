import { makeStyles } from '@material-ui/core/styles';
import { HEIGHT_OF_FOOTER_BLOCK } from './';

export const useStyles = makeStyles({
    footer: {
        height: HEIGHT_OF_FOOTER_BLOCK,
        boxShadow: '0px 0px 12px #8997AA',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
    }
});