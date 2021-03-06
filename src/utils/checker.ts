import blc from 'broken-link-checker';
import { HtmlCheckerOptions } from '../types';

/**
 * Checker
 */
export default class Checker {
	private checkerClass;

	/**
	 * @param {boolean} recursive recursive
	 */
	constructor(recursive: boolean) {
		this.checkerClass = recursive ? blc.SiteChecker : blc.HtmlUrlChecker;
	}

	/**
	 * @param {string} url url
	 * @param {object} options options
	 * @param {object} events events
	 */
	public start(url: string, options: HtmlCheckerOptions, events: object): void {
		(new this.checkerClass(options, events)).enqueue(url);
	}
}
