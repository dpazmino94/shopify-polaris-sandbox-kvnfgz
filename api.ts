const d = <V>({
  value,
  ms = 1000,
  error = false
}: {
  value: V;
  ms?: number;
  error?: boolean;
}): Promise<V> =>
  new Promise((resolve, reject) =>
    setTimeout(() => (error ? reject(new Error("error")) : resolve(value)), ms)
  );
const e = <V>(value: V) => d({ value });
const r = () =>
  [...Array(10)].map(i => (~~(Math.random() * 36)).toString(36)).join("");
const k = (l = 3) =>
  [...Array(l)].map((_, i) => {
    const x = r();
    return {
      id: `${x}`,
      type: "keys",
      attributes: {
        key: `${r()}-${r()}-${r()}-${r()}`,
        note: `代理店用に連携キーを使用 ${i}`,
        used_by: `アパレルECドットコム様 ${i}`,
        created_at: 1613770200
      }
    };
  });
// 

const KEYS = k();

// GET /app/keys
export const getKeys = async () => {
  const data = await e({
    data: KEYS
  });
  return data;
};

// DELETE
export const deleteKey = async (id: string) => {
  const nK = KEYS.filter(k => k.id !== id);
  const data = await e({
    data: nK
  });
  return data;
};

// POST
export const postKey = async id => {
  const data = await e({
    data: {
      id: "str",
      type: "keys",
      attributes: {
        keys: KEYS
      }
    }
  });
  return data;
};

// GET /app/products/samples
export const getProductsSamples = async (amounts = 5) => {
  const headings = [
    "Product",
    "Price",
    "SKU Number",
    "Net quantity",
    "Net sales"
  ];
  const singleRow = ["$875.00", 124689, 140, "$122,500.00"];
  const rows = Array(amounts)
    .fill(null)
    .map((x, i) => {
      return [`X ${i}`, ...singleRow];
    });

  const data = await e({
    data: {
      id: "a123",
      type: "products",
      attributes: {
        headings,
        rows
      }
    }
  });
  return data;
};
