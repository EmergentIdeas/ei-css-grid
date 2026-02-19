# ei-css-grid

A basic responsive grid.

# Usage

```js
import gridSetup from "@dankolz/ei-css-grid/initialize-webhandle-component.mjs"
let gridManager = await gridSetup(webhandle)

webhandle.routers.primary.use((req, res, next) => {
	gridManager.addExternalResources(externalResourceManager)
	next()
})

```


A grid that lays out vertically on mobile but lays out three columns wide on anything
bigger than a tablet.
```html
<div class="ei-css-grid">
	<div class="row">
		<div class="xs12 t4">
		</div>
		<div class="xs12 t4">
		</div>
		<div class="xs12 t4">
		</div>
	</div>
</div>
```