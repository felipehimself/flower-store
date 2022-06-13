import { STYLES } from '../../constants/styles';

const CheckIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
    >
      <circle cx='32' cy='32' r='32' fill={STYLES.colors.colorPrimary} />
      <path
        d='M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812'
        stroke='white'
        strokeWidth='4'
      />
    </svg>
  );
};
export default CheckIcon;
