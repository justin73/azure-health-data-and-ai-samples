import { makeStyles, shorthands } from '@fluentui/react-components';

export const useFooterStyles = makeStyles({
  footerContainer: {
    ...shorthands.margin('16px', '0px'),
  },
  innerFooterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoStyle: {
    height: '16px',
    width: '16px',
    marginBottom: '4px',
    filter:
      'invert(100%) sepia(0%) saturate(9%) hue-rotate(227deg) brightness(101%) contrast(102%)',
  },
});
