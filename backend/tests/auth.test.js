const authService = require('../src/services/auth.service');

describe('Authentication Service', () => {
  test('Super admin should login successfully', async () => {
    const result = await authService.login({
      email: 'superadmin@system.com',
      password: 'Admin@123',
      tenantSubdomain: 'demo'
    });

    expect(result.token).toBeDefined();
    expect(result.user.role).toBeDefined();
  });

  test('Login fails with wrong password', async () => {
    await expect(
      authService.login({
        email: 'admin@demo.com',
        password: 'WrongPassword',
        tenantSubdomain: 'demo'
      })
    ).rejects.toBeDefined();
  });
});
