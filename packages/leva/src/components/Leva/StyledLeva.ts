import { styled } from '../../styles'
import { StyledInputRow } from '../UI/StyledUI'

export const StyledRoot = styled('div', {
  /* position */
  position: 'relative',
  fontFamily: '$leva__mono',
  fontSize: '$leva__root',
  color: '$leva__rootText',
  backgroundColor: '$leva__elevation1',

  variants: {
    fill: {
      false: {
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1000,
        width: '$leva__rootWidth',
      },
      true: {
        position: 'relative',
        width: '100%',
      },
    },
    flat: {
      false: {
        borderRadius: '$leva__lg',
        boxShadow: '$leva__level1',
      },
    },
    oneLineLabels: {
      true: {
        [`${StyledInputRow}`]: {
          gridTemplateColumns: 'auto',
          gridAutoColumns: 'minmax(max-content, 1fr)',
          gridAutoRows: 'minmax($sizes$leva__rowHeight), auto)',
          rowGap: 0,
          columnGap: 0,
          marginTop: '$leva__rowGap',
        },
      },
    },
  },

  '&,*,*:after,*:before': {
    boxSizing: 'border-box',
  },

  '*::selection': {
    backgroundColor: '$leva__accent2',
  },
})
