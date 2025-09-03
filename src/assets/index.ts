const images = import.meta.glob('./*.{jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

export default images;
