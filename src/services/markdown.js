import marked from "marked";

export const fetchContent = async (url) => {
  const res = await fetch(`${url}/download`, { cache: "no-cache" });
  const text = await res.text();

  return marked(text);
};
