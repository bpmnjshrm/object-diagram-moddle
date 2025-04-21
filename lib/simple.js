import {
  assign
} from 'min-dash';

import ODModdle from './object-diagram-moddle.js';

import ODDescriptors from '../resources/od.json' with { type: 'json' };
import ODDiDescriptors from '../resources/odDi.json' with { type: 'json' };
import DcDescriptors from '../resources/dc.json' with { type: 'json' };
import BiocPackage from '../resources/bioc.json' with { type: 'json' };
import CHRDescriptors from '../resources/chr.json' with { type: 'json' };

const packages = {
  od: ODDescriptors,
  chr:CHRDescriptors,
  odDi: ODDiDescriptors,
  dc: DcDescriptors,
  bioc: BiocPackage,
};

export default function(additionalPackages, options) {
  const pks = assign({}, packages, additionalPackages);

  return new ODModdle(pks, options);
}
