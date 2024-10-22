type Props = {
  params: { slug: string };
};

const ProductDetailPage = ({ params: { slug } }: Props) => {
  return (
    <div>
      <h1>Page</h1>

      {slug}
    </div>
  );
};

export default ProductDetailPage;
