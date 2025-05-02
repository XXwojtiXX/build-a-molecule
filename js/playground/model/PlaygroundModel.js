// Copyright 2020-2021, University of Colorado Boulder

/**
 * Main model for Playground Screen. This screen doesn't include a collection area.
 *
 * @author Denzell Barnett (PhET Interactive Simulations)
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import Element from '../../../../nitroglycerin/js/Element.js';
import buildAMolecule from '../../buildAMolecule.js';
import BAMBucket from '../../common/model/BAMBucket.js';
import BAMModel from '../../common/model/BAMModel.js';
import CollectionLayout from '../../common/model/CollectionLayout.js';
import Kit from '../../common/model/Kit.js';
import KitCollection from '../../common/model/KitCollection.js';

// constants
const BUCKET_DIMENSIONS = new Dimension2( 670, 200 );

class PlaygroundModel extends BAMModel {
  constructor() {
    const collectionLayout = new CollectionLayout( false );
    const kitCollection = new KitCollection();
    super( kitCollection, collectionLayout, { isMultipleCollection: false } );

    // NOTE: if kits are modified here, examine MAX_NUM_HEAVY_ATOMS in MoleculeSDFCombinedParser, as it may need to be changed

    // general kit
    kitCollection.addKit( new Kit( collectionLayout, [
      BAMBucket.createAutoSized( this.stepEmitter, Element.H, 30 ),
      BAMBucket.createAutoSized( this.stepEmitter, Element.O, 6 ),
      BAMBucket.createAutoSized( this.stepEmitter, Element.C, 6 ),
      BAMBucket.createAutoSized( this.stepEmitter, Element.N, 5 ),
      BAMBucket.createAutoSized( this.stepEmitter, Element.Cl, 4 ),
      BAMBucket.createAutoSized( this.stepEmitter, Element.F, 4 ),
      BAMBucket.createAutoSized( this.stepEmitter, Element.B, 3 ),
      BAMBucket.createAutoSized( this.stepEmitter, Element.Si, 3 ),
      BAMBucket.createAutoSized( this.stepEmitter, Element.S, 3 ),
      BAMBucket.createAutoSized( this.stepEmitter, Element.P, 3 ),
      BAMBucket.createAutoSized( this.stepEmitter, Element.Br, 2 )
    ] ) );
  }
}

buildAMolecule.register( 'PlaygroundModel', PlaygroundModel );
export default PlaygroundModel;
