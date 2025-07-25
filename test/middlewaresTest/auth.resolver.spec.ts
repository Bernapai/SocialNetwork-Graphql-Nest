import { Test, TestingModule } from '@nestjs/testing';
import { AuthResolver } from 'src/auth/resolvers/auth.resolver';
import { AuthService } from 'src/auth/services/auth.service';


describe('AuthResolver', () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthResolver, AuthService],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
