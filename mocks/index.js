import Mock, { Random } from "mockjs";

Mock.setup({
  timeout: 1000
});

Random.extend({
  uuid() {
    return Random.guid()
  },
  title() {
    return Random.name()
  },
  size() {
    return Random.integer(0, 600);
  }
});

export default Mock.mock('/api/workers', function () {
  console.log('/api/workers');
  return Mock.mock({
    'list|6': [{
      uuid: '@uuid',
      name: '@title',
      size: '@size'
    }]
  }).list
});