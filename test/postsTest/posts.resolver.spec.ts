import { Test, TestingModule } from '@nestjs/testing';
import { PostsResolver } from 'src/posts/resolvers/posts.resolver';
import { PostsService } from 'src/posts/services/posts.service';

describe('PostsResolver', () => {
  let resolver: PostsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsResolver, PostsService],
    }).compile();

    resolver = module.get<PostsResolver>(PostsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
