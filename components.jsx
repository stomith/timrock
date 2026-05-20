// Shared small components (image placeholders, icons)
const { useState, useEffect, useRef, useMemo } = React;

function ImgPlaceholder({ label, size, desc, aspect = "16 / 10", style = {} }) {
  return (
    <div className="imgph" style={{ aspectRatio: aspect, ...style }}>
      <div className="center-mark">
        <div className="desc">{desc}</div>
      </div>
      <div className="imgph-caption">
        <span className="label">{label}</span>
        <span className="size">{size}</span>
      </div>
    </div>
  );
}

function Arrow({ size = 16 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PhoneIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 2.5L5.5 2L7 5.5L5.5 6.5C6 8 7 9.5 9.5 10.5L10.5 9L14 10.5L13.5 12.5C13.5 13 13 13.5 12 13.5C7.5 13.5 2.5 8.5 2.5 4C2.5 3 3 2.5 3.5 2.5Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function StarIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.5L10 6L14.5 6.5L11 9.7L12 14L8 11.8L4 14L5 9.7L1.5 6.5L6 6L8 1.5Z" />
    </svg>
  );
}

Object.assign(window, { ImgPlaceholder, Arrow, PhoneIcon, StarIcon });
