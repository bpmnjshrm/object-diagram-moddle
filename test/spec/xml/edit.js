import expect from '../../expect.js';

import {
  createModdle
} from '../../helper.js';

import {
  fromFile as readFromFile,
  toXML
} from '../../xml-helper.js';


describe('object-diagram-moddle - edit', function() {

  const moddle = createModdle();

  function fromFile(file) {
    return readFromFile(moddle, file);
  }


  describe('save after change', function() {

    it('should serialize changed name', async function() {

      // given
      const {
        rootElement: definitions
      } = await fromFile('test/fixtures/simple.xml');

      definitions.rootElements[0].name = 'OTHER NAME';

      // when
      const {
        xml
      } = await toXML(definitions, { format: true });

      // then
      expect(xml).to.contain('name="OTHER NAME"');
    });

  });

});
