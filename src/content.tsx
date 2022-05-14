import ContentWrapper from './frontground/ContentWrapper';
import renderRoot from './renderRoot';

const div = document.createElement('div');
div.id = 'statice-div';
renderRoot(() => <ContentWrapper />, div);
document.documentElement.appendChild(div);