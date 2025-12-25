const tenantService = require('../src/services/tenant.service');

describe('Tenant Service', () => {
  test('Tenant admin cannot access other tenant', async () => {
    const user = {
      role: 'tenant_admin',
      tenantId: '22222222-2222-2222-2222-222222222222'
    };

    await expect(
      tenantService.getTenantById(
        'some-other-tenant-id',
        user
      )
    ).rejects.toBeDefined();
  });
});
