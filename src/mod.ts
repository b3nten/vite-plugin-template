import * as vite from 'vite';

/****************************************************************************************
 * Plugin Entry
 *****************************************************************************************/

export default function vitePlugin(): vite.Plugin {

	/****************************************************************************************
	 * Finalized Vite configuration (read-only)
	 * - This is the resolved Vite configuration after applying all config resolution
	 * - Available only after the `configResolved` hook is called
	 *****************************************************************************************/
	let resolvedViteConfig: vite.ResolvedConfig

	return {
		// Todo: Rename
		name: 'vite-plugin',

		configResolved(config){
			resolvedViteConfig = config;
		},
		
	}
}