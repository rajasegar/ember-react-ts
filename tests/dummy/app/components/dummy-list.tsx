import React from 'react';
import WithEmberSupport from 'ember-react-ts';
import { add } from 'dummy/utils/math';

export default WithEmberSupport(function DummyList(props) {
  const { name, children } = props;

  return (
    <div id="wrapper" aria-label="hello">
      <div data-test-name>Hello {name}</div>
      <p>{add(1,4)}</p>
      {children}
    </div>
  );
});
