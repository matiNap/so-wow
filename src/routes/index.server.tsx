import { CacheLong, useShopQuery } from "@shopify/hydrogen";

export default function Home() {
  const {
    data: { shop },
  } = useShopQuery<any>({
    query: "{ shop { name } }",
    cache: CacheLong(),
    preload: true,
  });

  return (
    <div>
      <button>test</button>
    </div>
  );
}
