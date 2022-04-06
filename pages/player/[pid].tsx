import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { player } = router.query;

  return (
    <div>
      <p>Post: {player}</p>
    </div>
  );
};

export default Post;
