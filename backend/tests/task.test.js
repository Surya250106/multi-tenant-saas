const taskService = require('../src/services/task.service');

describe('Task Service', () => {
  test('User can list tasks for project', async () => {
    const user = {
      tenantId: '22222222-2222-2222-2222-222222222222'
    };

    const tasks = await taskService.listTasks(
      '66666666-6666-6666-6666-666666666666',
      {},
      user
    );

    expect(Array.isArray(tasks)).toBe(true);
  });
});
