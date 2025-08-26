export const SvgTextHalo = () => (
  <defs>
    {['black', 'white'].map((color) => (
      <filter key={color} id={`halo-${color}`} x="-50%" y="-50%" width="200%" height="200%">
        {/** stroke */}
        <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="outline" />
        <feFlood floodColor={color} floodOpacity="0.8" result="outlineColor" />
        <feComposite in="outlineColor" in2="outline" operator="in" result="outlineFinal" />

        {/** blured halo */}
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
        <feFlood floodColor={color} floodOpacity="0.5" result="blurColor" />
        <feComposite in="blurColor" in2="blur" operator="in" result="blurFinal" />

        {/** merge text + stroke + halo */}
        <feMerge>
          <feMergeNode in="blurFinal" />
          <feMergeNode in="outlineFinal" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    ))}
  </defs>
);
