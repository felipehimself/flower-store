import { STYLES } from '../../constants/styles';

const StarIcon = () => {
  return (
    <svg height='25' width='23' className='star rating' data-rating='5'>
      <polygon
        points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78'
        style={{ fillRule: 'nonzero' }}
        fill={STYLES.colors.colorPrimary}
      />
    </svg>
  );
};
export default StarIcon;
