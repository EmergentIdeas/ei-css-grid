import createInitializeWebhandleComponent from "@webhandle/initialize-webhandle-component/create-initialize-webhandle-component.mjs"
import ComponentManager from "@webhandle/initialize-webhandle-component/component-manager.mjs"
import path from "node:path"

let initializeWebhandleComponent = createInitializeWebhandleComponent()

initializeWebhandleComponent.componentName = '@dankolz/ei-css-grid'
initializeWebhandleComponent.componentDir = import.meta.dirname
initializeWebhandleComponent.defaultConfig = {}

initializeWebhandleComponent.setup = async function(webhandle, config) {
	let manager = new ComponentManager()
	manager.addExternalResources = (externalResourceManager) => {

		externalResourceManager.includeResource({
			mimeType: 'text/css'
			, url: '/@dankolz/ei-css-grid/ei-css-grid.css'
		})
	}
	manager.config = config
	
	manager.staticPaths.push(
		webhandle.addStaticDir(
			path.join(initializeWebhandleComponent.componentDir, 'public'), {
				urlPrefix: '/@dankolz/ei-css-grid'
				, fixedSetOfFiles: true
			})
		)
	

	return manager
}

export default initializeWebhandleComponent
