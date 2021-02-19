import 'babel-polyfill';
import 'babel-plugin-transform-remove-strict-mode';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
