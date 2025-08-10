import { usePosts } from '../hooks/usePosts';

export default function PostsPage() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'mock';

  // Usa o hook customizado
  const { data: posts, isLoading, error } = usePosts({
    page: '1',
    limit: '10',
    useMock: apiBase === 'mock'
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <p>Usando: {apiBase === 'mock' ? 'Repositório em Memória' : 'API HTTP'}</p>
      
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