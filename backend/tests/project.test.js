const projectService = require('../src/services/project.service');

describe('Project Service', () => {
  test('User can list projects for tenant', async () => {
    const user = {
      tenantId: '22222222-2222-2222-2222-222222222222'
    };

    const projects = await projectService.listProjects(user);

    expect(Array.isArray(projects)).toBe(true);
  });
});
