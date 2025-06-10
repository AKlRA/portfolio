import { classes } from '~/utils/style';
import styles from './icon.module.css';
import { forwardRef } from 'react';
import sprites from './icons.svg';

// Import your LinkedIn SVGs as React components or as URLs
import LinkedInLight from './icons8-linkedin.svg';
import LinkedInDark from './icons8-linkedin (1).svg';

// If you have a theme context/provider, import it
import { useTheme } from '~/components/theme-provider';

export const Icon = forwardRef(({ icon, className, size, ...rest }, ref) => {
  const { theme } = useTheme ? useTheme() : { theme: 'light' };

  if (icon === 'linkedin') {
    return (
      <img
        src={theme === 'dark' ? LinkedInDark : LinkedInLight}
        alt="LinkedIn"
        className={classes(styles.icon, className)}
        width={size || 24}
        height={size || 24}
        ref={ref}
        {...rest}
      />
    );
  }

  return (
    <svg
      aria-hidden
      ref={ref}
      className={classes(styles.icon, className)}
      width={size || 24}
      height={size || 24}
      {...rest}
    >
      <use href={`${sprites}#${icon}`} />
    </svg>
  );
});