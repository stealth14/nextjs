import React from "react";

const BOOKS_URL = "https://stark-spire-22280.herokuapp.com/api/books";

export default function ArticleDetails({ article }) {
  return <div>{article.title}</div>;
}

export default ArticleDetails;

export async function getStaticProps(context) {
  const { articleId } = context.params;
  const res = await fetch(BOOKS_URL + "/" + articleId);
  const data = await res.json();

  console.log("data", data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(BOOKS_URL);
  return {
    paths: [{ params: { article: "1" } }, { params: { article: "2" } }],
    fallback: false,
  };
}
