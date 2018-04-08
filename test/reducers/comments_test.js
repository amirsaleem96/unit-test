import { expect } from '../test_helper';
import commentReduer from '../../src/reducers/reducer_comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe("Comments Reducer", () => {

    it("handles action with unknown type", () => {
        expect(commentReduer()).to.be.instanceOf(Array);
    });

    it("SAVE_COMMENT", () => {

    });
    
});