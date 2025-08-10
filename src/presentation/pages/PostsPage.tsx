import { usePosts } from '../hooks/usePosts';

export default function PostsPage() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'https://blog-backend-production-88d3.up.railway.app';

  // Usa o hook customizado
  const { data: posts, isLoading, error } = usePosts({
    page: '1',
    limit: '10'
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <p>Usando: API HTTP - {apiBase}</p>
      
      {posts?.results.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
          <small>Autor: {post.author} | Categoria: {post.category}</small>
        </div>
      ))}
    </div>
  );
} 