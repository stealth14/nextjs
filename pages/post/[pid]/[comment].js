import { useRouter } from "next/router";
import Navigation from "../../components/Navigation";

const Comment = () => {
  const router = useRouter();
  console.log("router", router);
  const { pid, comment } = router.query;

  return (
    <>
      <Navigation />
      <p>Comment: {comment}</p>
      <p>Post: {pid}</p>
    </>
  );
};

export default Comment;
