import { expect } from '../test_helper';
import commentReduer from '../../src/reducers/reducer_comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe("Comments Reducer", () => {

    it("handles action with unknown type", () => {
        expect(commentReduer(undefined, {})).to.eql([]);
    });

    it("SAVE_COMMENT", () => {
        const action = { type: SAVE_COMMENT, payload: 'new comment' };
        expect(commentReduer( [], action )).to.eql(['new comment']);
    });

});