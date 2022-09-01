function Price({
  price,
  locale = 'sr',
  options = { style: 'currency', currency: 'RSD' },
  ...props
}) {
  const formattedPrice = new Intl.NumberFormat(locale, options).format(price);
  return <div {...props}>{formattedPrice}</div>;
}

export default Price;
