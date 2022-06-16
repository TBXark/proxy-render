import {freeLoader} from './http/loader.js';
import {render, defaultNameRender} from '../render.js';
import fetch from 'node-fetch';

global.fetch = fetch;

const proxies = await freeLoader();
const clash = render('clash', defaultNameRender, proxies);
console.log(clash);
