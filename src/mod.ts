import * as vite from 'vite';

export default function vitePlugin(): vite.Plugin{

	let resolvedViteConfig: vite.ResolvedConfig

	return {
		name: 'vite-plugin',

		configResolved(config){
			resolvedViteConfig = config;
		},
		
	}
}