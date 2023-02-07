const Image = ({ src, alt, className, loading = "lazy" }) => {
  return <img src={src} alt={alt} className={`${className}`} loading={loading} />;
};

export default Image;
