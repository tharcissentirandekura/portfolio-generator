type LandscapeDividerProps = {
  filled?: boolean;
};

const LandscapeDivider = ({ filled = false }: LandscapeDividerProps) => (
  <div className={filled ? 'w-full -mb-px' : 'page-shell'} aria-hidden="true">
    <svg
      viewBox="0 0 1200 88"
      preserveAspectRatio="none"
      className="h-14 w-full sm:h-20"
      focusable="false"
    >
      {filled ? (
        <path
          d="M0 70 C110 62 168 30 278 38 C386 46 432 76 548 62 C673 47 738 12 862 25 C994 39 1052 70 1200 48 V88 H0 Z"
          className="fill-ink dark:fill-white"
        />
      ) : (
        <>
          <path
            d="M0 58 C112 52 170 24 280 33 C390 42 438 70 552 57 C672 43 742 14 860 25 C990 37 1055 64 1200 44"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
            className="text-ink/15 dark:text-white/15"
          />
          <path
            d="M0 72 C126 66 192 42 304 49 C417 56 474 79 590 67 C711 54 784 30 900 39 C1018 48 1084 70 1200 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            className="text-ink/5 dark:text-white/10"
          />
        </>
      )}
    </svg>
  </div>
);

export default LandscapeDivider;
