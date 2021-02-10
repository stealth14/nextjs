import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  const { pid } = router.query;
  return <>Post: {pid}</>;
};

export default Post;