import { join } from 'path';
import { Context } from '../../src/context';
import { SOCIAL_FORMATTERS as TABLE } from '../../src/plugins/formatters.social';
import { Node } from '../../src/node';
import { pathseq } from '../helpers';
import { TemplateTestLoader } from '../loader';
import { Variable } from '../../src/variable';

const loader = new TemplateTestLoader(join(__dirname, 'resources'));
const variables = (...n: any[]) => n.map((v, i) => new Variable('var' + i, v));

// TODO: create external test cases for 'activate twitter links' here and for Java compiler.
test('activate twitter links', () => {
  const impl = TABLE['activate-twitter-links'];

  const ctx = new Context({});
  const vars = variables(new Node('#Foo and #Bar'));
  impl.apply([], vars, ctx);
  const result = vars[0].get();
  expect(result).toContain('<a target="new" href="https://twitter.com/hashtag/Foo?src=hash">#Foo</a>');
  expect(result).toContain('<a target="new" href="https://twitter.com/hashtag/Bar?src=hash">#Bar</a>');
});

pathseq('f-activate-twitter-links-%N.html', 1).forEach(path => {
  test(`${path}`, () => loader.execute(path));
});

pathseq('f-comment-count-%N.html', 3).forEach(path => {
  test(`comment count - ${path}`, () => loader.execute(path));
});

pathseq('f-comment-link-%N.html', 3).forEach(path => {
  test(`comment link - ${path}`, () => loader.execute(path));
});

pathseq('f-comments-%N.html', 3).forEach(path => {
  test(`comments - ${path}`, () => loader.execute(path));
});

pathseq('f-like-button-%N.html', 2).forEach(path => {
  test(`like button - ${path}`, () => loader.execute(path));
});

pathseq('f-google-calendar-url-%N.html', 3).forEach(path => {
  test(`google calendar url - ${path}`, () => loader.execute(path));
});

pathseq('f-social-button-%N.html', 1).forEach(path => {
  test(`social button - ${path}`, () => loader.execute(path));
});

pathseq('f-social-button-inline-%N.html', 1).forEach(path => {
  test(`social button inline - ${path}`, () => loader.execute(path));
});

pathseq('f-twitter-follow-button-%N.html', 2).forEach(path => {
  test(`twitter follow button - ${path}`, () => loader.execute(path));
});
