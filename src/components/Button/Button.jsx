import React from 'react';
import './Button.css';

/**
 * Button — mirrors the Buttons/Button component from the Midi Design System.
 *
 * Props
 * ─────
 * hierarchy  'primary' | 'secondary' | 'tertiary' | 'secondary-on-brand'
 *            | 'link-color' | 'link-gray'
 * size       'sm' | 'md' | 'lg' | 'xl'
 * iconLeading  ReactNode  — leading icon slot
 * iconTrailing ReactNode  — trailing icon slot
 * iconOnly   boolean     — render a square icon-only button (uses iconLeading ?? iconTrailing)
 * loading    boolean     — replaces content with a spinner and disables interaction
 * disabled   boolean
 */
function Button({
  hierarchy = 'primary',
  size = 'md',
  iconLeading = null,
  iconTrailing = null,
  iconOnly = false,
  loading = false,
  disabled = false,
  children,
  className = '',
  type = 'button',
  onClick,
  ...rest
}) {
  const classNames = [
    'btn',
    `btn--${size}`,
    `btn--${hierarchy}`,
    iconOnly && 'btn--icon-only',
    loading && 'btn--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={classNames}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={onClick}
      {...rest}
    >
      {loading ? (
        <span className="btn__spinner" aria-hidden="true" />
      ) : iconOnly ? (
        <span className="btn__icon" aria-hidden="true">
          {iconLeading ?? iconTrailing}
        </span>
      ) : (
        <>
          {iconLeading && (
            <span className="btn__icon btn__icon--leading" aria-hidden="true">
              {iconLeading}
            </span>
          )}
          {children != null && (
            <span className="btn__label">{children}</span>
          )}
          {iconTrailing && (
            <span className="btn__icon btn__icon--trailing" aria-hidden="true">
              {iconTrailing}
            </span>
          )}
        </>
      )}
    </button>
  );
}

export default Button;
