import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | press ui testing', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /press-ui-testing', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
