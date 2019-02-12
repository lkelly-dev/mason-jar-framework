import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// good values

global.cn = 'neato';
global.color = 'danger';
global.shape = 'rounded';
global.status = 'active';
global.outline = 'warning';
global.orientation = 'vertical';
global.size = 'sm';
global.validity = 'valid';
global.fixed = 'top';

// bad values

global.badColor = 'potato';
global.badShape = 'star';
global.badStatus = 'single';
global.badOutline = 'double-dotted';
global.badSize = 'extra-medium';
global.badOrientation = 'diagonal';
global.badValidity = 'maybe';
global.badFixed = 'wherever';
