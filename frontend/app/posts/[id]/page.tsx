type Props = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: Props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
