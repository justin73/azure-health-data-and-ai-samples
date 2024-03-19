import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const usePageLayoutStyles = makeStyles({
  card: {
    ...shorthands.margin(tokens.spacingHorizontalXL),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.padding(tokens.spacingHorizontalXL),
  },
});
