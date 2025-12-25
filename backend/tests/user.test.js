const userService = require('../src/services/user.service');

describe('User Service', () => {
  test('Tenant admin can create user', async () => {
    const user = {
      role: 'tenant_admin',
      tenantId: '22222222-2222-2222-2222-222222222222'
    };

    const newUser = await userService.createUser(
      user.tenantId,
      {
        email: 'testuser@demo.com',
        password: 'Test@1234',
        fullName: 'Test User',
        role: 'user'
      },
      user
    );

    expect(newUser.email).toBe('testuser@demo.com');
  });
});
