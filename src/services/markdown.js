import marked from "marked";

export const fetchContent = async (url) => {
  const res = await fetch(`${url}/download`);
  const text = await res.text();

  return marked(text);
};
