import { PostApiDataSource } from '../../data/datasources/PostApiDataSource';
import { PostRepositoryImpl } from '../../data/repositories/PostRepositoryImpl';
import { GetPostsUseCase } from '../../domain/usecases/GetPostsUseCase';
import { SearchPostsUseCase } from '../../domain/usecases/SearchPostsUseCase';

// Container simples para injeção de dependências
export class Container {
  private static instance: Container;
  private dependencies: Map<string, unknown> = new Map();

  private constructor() {
    this.registerDependencies();
  }

  static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  private registerDependencies() {
    // Data Sources
    const postDataSource = new PostApiDataSource();
    this.dependencies.set('PostApiDataSource', postDataSource);

    // Repositories
    const postRepository = new PostRepositoryImpl(postDataSource);
    this.dependencies.set('PostRepository', postRepository);

    // Use Cases
    this.dependencies.set('GetPostsUseCase', new GetPostsUseCase(postRepository));
    this.dependencies.set('SearchPostsUseCase', new SearchPostsUseCase(postRepository));
  }

  get<T>(key: string): T {
    const dependency = this.dependencies.get(key);
    if (!dependency) {
      throw new Error(`Dependency ${key} not found`);
    }
    return dependency as T;
  }
}

// Exporta instâncias prontas para uso
export const container = Container.getInstance(); 