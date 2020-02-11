import { StyleSheet } from 'react-native';
import {
  FONT_SIZE_CAPTION,
  FONT_SIZE_BUTTON,
  COLOR_FONT_SECONDARY_DARK,
  COLOR_BASE_FOOTER_CARD,
  COLOR_FONT_FOOTER_CARD
} from '../../../styles';
import METRICS from '../../../constants/metrics';
import { scale } from '../../../utils/scaling';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: { top: METRICS.horizontalLineHeight },
  card: {
    width: scale(300),
    borderRadius: scale(10),
    left: METRICS.section
  },
  cardBody: { height: scale(85) },
  footerCard: { backgroundColor: COLOR_BASE_FOOTER_CARD, height: scale(30), color: COLOR_FONT_FOOTER_CARD },
  thumbnail: { borderRadius: scale(3) },
  customers: {
    fontSize: FONT_SIZE_BUTTON,
    fontWeight: 'bold'
  },
  ordered: {
    fontSize: FONT_SIZE_CAPTION,
    color: COLOR_FONT_SECONDARY_DARK
  },
  icon: { flexDirection: 'row' },
  deleted: { left: METRICS.section, paddingHorizontal: METRICS.setSearchBarHeight }
});

export default styles;
