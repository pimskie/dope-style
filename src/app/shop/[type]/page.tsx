import Head from "next/head";

type Props = {
  params: { type: string };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: params.type,
  };
}

const Shop = ({ params }: Props) => {
  return (
    <div>
      <h1>{params.type}</h1>
    </div>
  );
};

export default Shop;
