import { styled } from '@mui/material/styles';
import { CardHeader} from '@mui/material';


export const BoxHeader = styled(CardHeader)({
    '& .MuiCardHeader-title':{
        fontSize: 16,
        fontWight:'bold',
        whiteSpace: 'nowrap'
    }
  });