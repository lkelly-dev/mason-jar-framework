const MODIFIERS = {
  COLOR: {
    primary: true,
    secondary: true,
    success: true,
    danger: true,
    warning: true,
    info: true,
    light: true,
    dark: true,
  },
  SIZE: {
    xs: true,
    sm: true,
    lg: true,
    xl: true,
    xxl: true,
  },
  STATUS: {
    online: true,
    offline: true,
  },
  SHAPE: {
    rounded: 'rounded',
    roundedTop: 'rounded-top',
    roundedRight: 'rounded-right',
    roundedBottom: 'rounded-bottom',
    roundedLeft: 'rounded-left',
    roundedCircle: 'rounded-circle',
    roundedZero: 'rounded-0',
  },
  FIXED: {
    top: 'true',
    bottom: 'true',
    left: 'true',
    right: 'true',
  },
  VALIDITY: {
    valid: true,
    invalid: true,
  },
  ORIENTATION: {
    vertical: true,
  },
  BREADCRUMB: {
    active: true,
  },
  BUTTON: {
    active: true,
    disabled: true,
  },
};

export default MODIFIERS;
