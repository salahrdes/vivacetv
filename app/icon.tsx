import { ImageResponse } from 'next/og';

export const size = { width: 192, height: 192 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 192,
          height: 192,
          borderRadius: 40,
          background: '#0F0E0C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
        }}
      >
        {/* "C" letter */}
        <div
          style={{
            fontSize: 108,
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1,
            letterSpacing: -4,
            fontFamily: 'sans-serif',
          }}
        >
          C
        </div>
        {/* Lime dot — the brand signature */}
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: '#C9F542',
            marginBottom: -30,
            marginLeft: -4,
          }}
        />
      </div>
    ),
    { width: 192, height: 192 },
  );
}
