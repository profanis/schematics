import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { <%= classify(name) %>State, <%= classify(name) %>StateModel } from './<%= dasherize(name) %>.state';
import { <%= classify(name) %>Action } from './<%= dasherize(name) %>.actions';

describe('<%= classify(name) %> store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([<%= classify(name) %>State])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const todo: <%= classify(name) %>StateModel = {
      items: []
    };
    todo.items = ['item-1'];
    store.dispatch(new <%= classify(name) %>Action('item-1'));
    const expected = store.selectSnapshot(<%= classify(name) %>State.getState);
    expect(expected).toEqual(todo);
  });

});
